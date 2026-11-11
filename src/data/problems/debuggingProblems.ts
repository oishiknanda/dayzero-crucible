export interface DebugTestCase {
  id: string;
  input: string;
  expectedOutput: string;
  explanation: string;
  isHidden: boolean;
}

export interface DebuggingScenario {
  id: string;
  company: "Google" | "Amazon";
  title: string;
  difficulty: "Hard";
  category: string;
  bugReport: string;
  paragraphs: string[];
  starterCode: string;
  solutionCode: string;
  testCases: DebugTestCase[];
  targetFunctions: string[];
}

const sixCases = (prefix: string, descriptions: string[]): DebugTestCase[] => descriptions.map((explanation, index) => ({
  id: `${prefix}-${index + 1}`,
  input: String(index + 1),
  expectedOutput: "PASS",
  explanation,
  isHidden: index >= 3,
}));

const googleSearchStarter = `// Search service: latest query should own the visible results.
const cache = new Map();
let activeRequest = 0;
let pending = new Set();

async function search(query, fetchResults) {
  const key = query.trim().toLowerCase();
  if (cache.has(key)) return cache.get(key);
  const requestId = ++activeRequest;
  pending.add(requestId);
  const results = await fetchResults(key);
  pending.delete(requestId);
  cache.set(key, results);
  return results;
}

function invalidate(query) {
  cache.delete(query.trim().toLowerCase());
}

function createSearchController(onResults) {
  let timer;
  return {
    query(value, fetchResults) {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        const results = await search(value, fetchResults);
        onResults(results);
      }, 150);
    },
    dispose() {
      clearTimeout(timer);
    },
  };
}

function diagnostics() {
  return { activeRequest, pending: pending.size, cacheEntries: cache.size };
}

// Operational notes for the service that owns this module:
// - A browser may issue multiple requests while a user types quickly.
// - Network completion order is independent of request start order.
// - A response is useful only while its query still matches the visible input.
// - Cache invalidation is also a state transition for every matching request.
// - Pending work must be bounded during long sessions with frequent queries.
// - A caller that is disposed must never receive a late callback.
// - Do not retain an aborted request forever in the pending collection.
// - Cache keys should use one normalized representation everywhere.
// - Empty queries should not trigger remote fetch work in the UI layer.
// - Cached results should be treated as immutable snapshots by consumers.
// - Failed requests should not poison otherwise healthy cache entries.
// - A stale response should not overwrite a response for a newer query.
// - Different controller instances may coexist in a multi-panel page.
// - Cleanup should be safe to call more than once.
// - Diagnostics are for local observability and must not expose query contents.
// - Debounce timers should be cleared when a new keystroke arrives.
// - A timer callback should re-check whether its owner is still mounted.
// - Request identifiers should not be confused with cache keys.
// - Cache invalidation must not depend on a particular UI framework.
// - Fetch adapters can reject, resolve out of order, or never settle.
// - Keep the result publication path small enough to audit during an incident.
// - Production implementations can connect AbortController to the request.
// - An abort signal is an optimization; response ordering is still required.
// - Do not update state from a request whose ownership has been revoked.
// - A cache hit must follow the same normalized key path as a cache write.
// - Preserve useful prior results until the latest request is validated.
// - Record cleanup in finally blocks when adding more asynchronous steps.
// - The request coordinator is intentionally independent from React state.
// - Test slower-old / faster-new completion order explicitly.
// - Test invalidation while a request is still awaiting its network response.
// - Test dispose both before a debounce fires and after fetch has started.
// - Avoid an unbounded promise registry for abandoned requests.
// - This scenario uses deterministic adapters; no external service is called.
// - The test suite expects visible results to represent the latest intent.
// - Treat any callback after dispose as a lifecycle bug.
// - Keep returned diagnostics small and free of user query text.
// - Prefer a monotonically increasing generation for request ownership.
// - Verify the generation at the point of cache write and UI publication.
// - Never assume clearing a timer cancels an already-running network request.
// - Cache invalidation should revoke the old generation before deleting data.
// - Cleanup must release references even when the fetch promise rejects.
// - New UI adapters should pass a stable fetch function where possible.
// - Result ordering matters more than request cancellation for correctness.
// - The caller owns display state; this module owns request/cache state.
// - Keep errors distinguishable from an empty successful result.
// - Avoid logging full remote payloads from production diagnostics.
// - A bounded cache is preferable when this service runs for many hours.
// - Any future cache eviction policy must preserve the latest active query.
// - Validate behavior with two overlapping requests, not only sequential calls.
// - Check that one controller cannot publish another controller's response.
// - Resolve all pending bookkeeping in both success and failure paths.
// - These notes define the intended ownership and cleanup contract.
// - Candidate changes should keep this contract true after every operation.
// - Keep request lifecycle transitions observable during incident debugging.
// - Preserve deterministic behavior for equal inputs and completion schedules.
// - Revisit callback ownership whenever a new cache layer is introduced.

module.exports = { search, invalidate, createSearchController, diagnostics };
`;

const googleSearchSolution = googleSearchStarter
  .replace("  const key = query.trim().toLowerCase();\n  if (cache.has(key)) return cache.get(key);\n  const requestId = ++activeRequest;", "  const key = query.trim().toLowerCase();\n  const requestId = ++activeRequest;\n  if (cache.has(key)) return cache.get(key);")
  .replace("  cache.set(key, results);\n  return results;", "  if (requestId !== activeRequest) return null;\n  cache.set(key, results);\n  return results;")
  .replace("function invalidate(query) {\n  cache.delete(query.trim().toLowerCase());", "function invalidate(query) {\n  cache.delete(query.trim().toLowerCase());\n  activeRequest += 1;")
  .replace("      timer = setTimeout(async () => {\n        const results = await search(value, fetchResults);\n        onResults(results);", "      timer = setTimeout(async () => {\n        const results = await search(value, fetchResults);\n        if (results !== null) onResults(results);")
  .replace("    dispose() {\n      clearTimeout(timer);", "    dispose() {\n      clearTimeout(timer);\n      activeRequest += 1;");

const googleRateStarter = `// Per-key token buckets shared by concurrent request handlers.
const buckets = new Map();
const CAPACITY = 5;
const REFILL_PER_SECOND = 2;
const MAX_TIMESTAMP = 2 ** 31 - 1;

function getBucket(key, now) {
  if (!buckets.has(key)) buckets.set(key, { tokens: CAPACITY, updatedAt: now });
  return buckets.get(key);
}

function takeToken(key, now) {
  const bucket = getBucket(key, now);
  const elapsed = Math.max(0, (now | 0) - (bucket.updatedAt | 0));
  const refill = Math.floor((elapsed * REFILL_PER_SECOND) / 1000);
  bucket.tokens = Math.min(CAPACITY, bucket.tokens + refill);
  bucket.updatedAt = now;
  if (bucket.tokens <= 0) return false;
  bucket.tokens -= 1;
  return true;
}

function retryAfterMs(key, now) {
  const bucket = getBucket(key, now);
  if (bucket.tokens > 0) return 0;
  return Math.ceil(1000 / REFILL_PER_SECOND);
}

function snapshot(key) {
  return buckets.get(key) || null;
}

// Rate-limiter operating contract:
// - Tokens represent permission to start one request, not a completion count.
// - Capacity is the maximum burst admitted when the bucket is full.
// - Refill is continuous even when observed at discrete request timestamps.
// - The stored token count must remain in the inclusive range [0, CAPACITY].
// - A denied request must not consume a token or move time backwards.
// - Use one monotonic time source inside a process where one is available.
// - Wall clocks can jump due to synchronization and device configuration.
// - Distributed nodes need shared atomic state or a partitioning strategy.
// - A read-modify-write sequence must be atomic for concurrent callers.
// - Fractional tokens preserve credit when requests arrive frequently.
// - Rounding down elapsed refill at each call loses that fractional credit.
// - Retry-After is the time until the next whole token is available.
// - Retry-After should be zero if the current bucket can admit a request.
// - Long idle periods must clamp at capacity rather than grow without bound.
// - Numeric calculations must avoid overflow for extreme timestamps.
// - A clock rollback should grant no refill and should not corrupt the baseline.
// - A missing bucket begins full so the first burst is admitted.
// - A separate key must never share another key's tokens accidentally.
// - Key normalization belongs at the caller boundary and must be consistent.
// - Reset exists only for deterministic test isolation.
// - Snapshot is diagnostic state and should not mutate the bucket.
// - Hidden tests include partial refill, clock rollback, and a large time gap.
// - Concurrent tests should interleave attempts against the same key.
// - Keep policy decisions separate from HTTP status and response formatting.
// - A production distributed backend should use an atomic script or transaction.
// - Redis key expiry must allow sufficient time for refill and recovery.
// - Avoid expiring state while a key still has outstanding fractional credit.
// - The precise retry delay should account for the existing fractional balance.
// - Apply a small response-side safety margin only at the API boundary.
// - Do not add jitter to the internal token accounting itself.
// - Monitoring can report denied counts without logging client identifiers.
// - One caller must not be able to set the bucket timestamp directly.
// - Refill math should be deterministic under repeated identical timestamps.
// - Requests at the same timestamp should be serialized atomically.
// - Keep capacity and refill rate independently configurable in production.
// - This fixture uses a fixed policy so the regression suite is reproducible.
// - Exact arithmetic is preferred until the token count reaches capacity.
// - Never use bitwise operators for epoch timestamps in JavaScript.
// - JavaScript bitwise conversion truncates values to signed 32-bit integers.
// - A large timestamp can wrap when coerced through a bitwise operation.
// - Verify the remaining wait at both zero and fractional token balances.
// - The caller may retry early, so denial must remain correct on every attempt.
// - Prefer returning a duration over a preformatted HTTP header from this module.
// - This module is synchronous; production shared storage may require async APIs.
// - Keep atomicity explicit if changing the storage adapter.
// - Do not silently allow negative token balances during a burst.
// - Capacity clamping should happen after refill and before consumption.
// - A request that succeeds leaves the bucket exactly one token lower.
// - Changes to refill units must be reflected in retry delay calculations.
// - The invariant is more important than the shape of internal bucket state.
// - Test the first call, final token, partial wait, and maximum idle interval.
// - Do not assume requests arrive at whole-second boundaries.
// - This note is part of the candidate's production readiness context.
// - Reject invalid timestamps at the service boundary rather than coercing them.
// - Keep bucket state small enough for a high-cardinality workload.
// - Avoid a global lock if independent keys can proceed independently.
// - Include a test where several callers compete for the final token.
// - Record decision latency without changing token accounting semantics.
// - Make retry calculations use the exact same refill model as consumption.
// - Document the consistency model when multiple regions share rate state.
// - Do not confuse a per-user key with a per-account or per-IP key.
// - Policy changes should be versioned if persisted bucket records survive deploys.
// - Ensure a configuration update cannot create tokens above the new capacity.

function reset() { buckets.clear(); }
module.exports = { takeToken, retryAfterMs, snapshot, reset, MAX_TIMESTAMP };
`;
const googleRateSolution = googleRateStarter
  .replace("const elapsed = Math.max(0, (now | 0) - (bucket.updatedAt | 0));", "const elapsed = Math.max(0, now - bucket.updatedAt);")
  .replace("const elapsed = Math.max(0, now - bucket.updatedAt);\n  const refill = Math.floor((elapsed * REFILL_PER_SECOND) / 1000);\n  bucket.tokens = Math.min(CAPACITY, bucket.tokens + refill);\n  bucket.updatedAt = now;\n  if (bucket.tokens <= 0) return false;\n  bucket.tokens -= 1;\n  return true;", "const elapsed = Math.max(0, now - bucket.updatedAt);\n  const exactRefill = (elapsed * REFILL_PER_SECOND) / 1000;\n  bucket.tokens = Math.min(CAPACITY, bucket.tokens + exactRefill);\n  bucket.updatedAt = now;\n  if (bucket.tokens < 1) return false;\n  bucket.tokens -= 1;\n  return true;")
  .replace("return Math.ceil(1000 / REFILL_PER_SECOND);", "return Math.ceil(((1 - bucket.tokens) * 1000) / REFILL_PER_SECOND);");

const amazonLockerStarter = `// Lock manager used while assigning a group of storage lockers.
const locks = new Map();
const waiters = new Map();

async function acquire(lockId, owner) {
  if (!locks.has(lockId)) {
    locks.set(lockId, owner);
    return;
  }
  await new Promise((resolve) => {
    const queue = waiters.get(lockId) || [];
    queue.push({ owner, resolve });
    waiters.set(lockId, queue);
  });
}

function release(lockId, owner) {
  if (locks.get(lockId) !== owner) throw new Error("lock owner mismatch");
  const queue = waiters.get(lockId) || [];
  if (queue.length) {
    const next = queue.shift();
    locks.set(lockId, next.owner);
    next.resolve();
  } else {
    locks.delete(lockId);
  }
}

async function reserve(lockIds, owner, work) {
  const acquired = [];
  try {
    for (const id of lockIds) {
      await acquire(id, owner);
      acquired.push(id);
    }
    return await work();
  } finally {
    for (const id of acquired) release(id, owner);
  }
}

function release(lockId, owner) {
  if (locks.get(lockId) !== owner) throw new Error("lock owner mismatch");
  const queue = waiters.get(lockId) || [];
  if (queue.length) { const next = queue.shift(); locks.set(lockId, next.owner); next.resolve(); }
  else locks.delete(lockId);
}

function reset() { locks.clear(); waiters.clear(); }
function snapshot() { return { held: locks.size, queued: [...waiters.values()].reduce((n, q) => n + q.length, 0) }; }

// Locking contract for locker assignment:
// - Every reservation acquires all requested resources or none of them long term.
// - A caller may request lockers in an arbitrary input order.
// - Two callers can overlap on any subset of the same lockers.
// - A global stable acquisition order prevents circular wait across requests.
// - Duplicate identifiers should be collapsed before acquiring locks.
// - Each acquired lock has exactly one current owner.
// - Only that owner can release the lock.
// - Waiters should be handed ownership in FIFO order for predictable fairness.
// - Queue state must be removed when the final waiter leaves.
// - A rejected work callback still requires cleanup of every acquired lock.
// - A waiting request should not hold a later lock while blocked on an earlier one.
// - Keep the lock manager independent from the storage operation it protects.
// - A lock release should transfer ownership before waking the next waiter.
// - Resolving a waiter before setting its ownership creates a race window.
// - Never release a lock that this reservation did not successfully acquire.
// - Multiple reservations from the same logical owner still need separate tracking.
// - A real distributed lock needs leases and fencing tokens for crashed workers.
// - Lease expiry alone does not stop a paused former owner from writing later.
// - Fencing tokens should be checked by the protected storage layer.
// - Keep reservation cleanup in a finally block around user work.
// - Reset is a test utility and must not be called while live reservations run.
// - Snapshot is diagnostic only and must not expose customer locker data.
// - Tests should run opposing lock order concurrently to reproduce deadlock.
// - Tests should exercise duplicate IDs and callback rejection paths.
// - A deadlock is a liveness failure even if no assertion throws.
// - Regression checks use a bounded timeout to identify stuck promises.
// - Stable sorting should use the same comparator in every process.
// - Resource identifiers should have a canonical comparable representation.
// - Do not depend on object key order for lock acquisition.
// - Release errors should remain visible rather than being silently swallowed.
// - Queue handoff must preserve each waiter's resolver exactly once.
// - A cancelled waiter must be removed if cancellation support is introduced.
// - Prefer acquiring the full ordered set before running protected work.
// - Keep a clear invariant for held locks and queued waiters.
// - Avoid holding unrelated lockers while performing remote network calls.
// - In production, keep lock duration short and instrument acquisition latency.
// - Consider bounded waits and retry policy at the service boundary.
// - A successful reservation releases its resources before returning to its caller.
// - Exceptions from the work callback should preserve their original error.
// - This fixture models in-process locks; database transactions need their own rules.
// - The target is correctness under contention, not just single-threaded success.
// - Review every early return for a matching release path.
// - A shared deterministic lock order addresses the circular-wait condition.
// - Test both successful handoff and cleanup after a thrown callback.
// - Keep ownership validation close to the release operation.
// - Never infer ownership from queue position alone.
// - Snapshot counts are useful for spotting leaked reservations in tests.
// - These notes define the expected lock lifecycle for the exercise.
// - Lock key encoding must avoid collisions between composite identifiers.
// - A lock manager should expose health metrics without leaking sensitive IDs.

module.exports = { reserve, release, reset, snapshot };
`;
const amazonLockerSolution = amazonLockerStarter.replace(
  "  const acquired = [];\n  try {\n    for (const id of lockIds) {\n      await acquire(id, owner);\n      acquired.push(id);",
  "  const acquired = [];\n  const orderedIds = [...new Set(lockIds)].sort();\n  try {\n    for (const id of orderedIds) {\n      await acquire(id, owner);\n      acquired.push(id);"
);

const amazonOrderStarter = `// Idempotent payment and order-state coordinator.
const orders = new Map();
const processedEvents = new Set();
const payments = new Map();

function createOrder(id) {
  const order = { id, state: "PENDING", paymentId: null, version: 0 };
  orders.set(id, order);
  return order;
}

async function handlePayment(event, charge) {
  const order = orders.get(event.orderId);
  if (!order) throw new Error("order not found");
  if (processedEvents.has(event.id)) return order;
  const paymentId = await charge(event.orderId, event.amount);
  payments.set(paymentId, event.amount);
  order.paymentId = paymentId;
  order.state = "PAID";
  order.version += 1;
  processedEvents.add(event.id);
  return order;
}

function cancel(orderId) {
  const order = orders.get(orderId);
  if (!order) return false;
  if (order.state === "CANCELLED") return true;
  order.state = "CANCELLED";
  order.version += 1;
  return true;
}

function snapshot(orderId) {
  return { order: orders.get(orderId), paymentCount: payments.size, eventCount: processedEvents.size };
}

// Order-state and payment idempotency contract:
// - A client may retry after a timeout without knowing if payment succeeded.
// - Event delivery can be repeated or concurrent across worker processes.
// - The external charge call can finish after a request has been cancelled.
// - Exactly-once delivery cannot be assumed from a message queue.
// - The idempotency key must identify one logical payment attempt durably.
// - Marking an event complete before charging can lose a real payment.
// - Marking it complete only after charging allows a concurrent duplicate charge.
// - Concurrent duplicate events should await one shared in-flight operation.
// - A failed charge must clear transient state so a safe retry can occur.
// - Successful payment state and event dedupe should be committed atomically.
// - A paid order cannot transition back to pending or cancelled by stale events.
// - A cancelled order must not be resurrected by a late payment callback.
// - A late successful charge may require a compensating refund workflow.
// - State transitions should be validated against the prior state explicitly.
// - Version numbers help detect lost updates in a persistent store.
// - Database uniqueness constraints are required across application replicas.
// - In-memory maps are only a local exercise fixture, not durable production state.
// - A production charge provider should receive the same stable idempotency key.
// - Never generate a new provider key for a retry of the same event.
// - Payment records should be keyed by the logical operation, not provider output.
// - Persist provider response IDs separately from the idempotency key.
// - Use a transaction or outbox to coordinate event acknowledgement and state write.
// - Do not acknowledge a queue message before durable state is committed.
// - Preserve the original order when duplicate events arrive after completion.
// - Keep missing-order errors distinct from transient provider failures.
// - A cancellation racing with authorization needs an explicit business policy.
// - Test pending-to-paid, pending-to-cancelled, and paid-to-cancelled transitions.
// - Test duplicate deliveries both sequentially and with overlapping promises.
// - Test provider rejection followed by a retry with the same event identifier.
// - Test a callback resolving after a cancellation has already committed.
// - Avoid using event ID alone if IDs are only unique per producer or tenant.
// - Include tenant and operation scope in a production idempotency key.
// - Bound retention for completed idempotency records by business retry policy.
// - Do not expire dedupe data while a retry can still be delivered.
// - Snapshot is diagnostic and should avoid exposing payment credentials.
// - Reset is reserved for isolated test cases.
// - Version increments should correspond to accepted state transitions only.
// - Duplicate success must not increment order version a second time.
// - The payment amount and currency should be part of validation, not client trust.
// - A provider timeout may have an unknown outcome and needs reconciliation.
// - Idempotent APIs should make retries safe even after process restart.
// - A unique database index can be the final guard against double insertion.
// - The fixture intentionally leaves these durability concerns for discussion.
// - Candidates should separate in-memory correctness from distributed guarantees.
// - Preserve audit history for payment state changes in a production service.
// - Do not delete completed provider references during a client retry.
// - A compensating action is different from pretending the charge never happened.
// - Explicit state transition helpers can make the allowed graph easier to audit.
// - This scenario measures safe reasoning about retries and state ordering.
// - Keep the primary state invariant visible next to the mutation.
// - Protect both local concurrency and cross-process duplicate delivery.
// - Explain what is atomic and where the boundary of that guarantee lies.
// - Error paths are part of the state machine, not an afterthought.
// - A callback must not mutate the order without confirming its current state.
// - The same event should produce the same logical result every time.
// - These notes define the reliability bar for this order service.
// - Reconciliation should resolve unknown outcomes without charging again.
// - Use an audit trail to explain each accepted or rejected state transition.
// - Define whether cancellation is allowed after authorization but before capture.

function reset() { orders.clear(); processedEvents.clear(); payments.clear(); }
module.exports = { createOrder, handlePayment, cancel, snapshot, reset };
`;
const amazonOrderSolution = `const orders = new Map();
const processedEvents = new Set();
const payments = new Map();
const inFlightPayments = new Map();
function createOrder(id) { const order = { id, state: "PENDING", paymentId: null, version: 0 }; orders.set(id, order); return order; }
async function handlePayment(event, charge) {
  const order = orders.get(event.orderId);
  if (!order) throw new Error("order not found");
  if (processedEvents.has(event.id)) return order;
  const idempotencyKey = event.orderId + ":" + event.id;
  if (inFlightPayments.has(idempotencyKey)) return inFlightPayments.get(idempotencyKey);
  const operation = (async () => {
    const paymentId = await charge(event.orderId, event.amount);
    payments.set(idempotencyKey, paymentId);
    if (order.state === "PENDING") { order.paymentId = paymentId; order.state = "PAID"; order.version += 1; }
    processedEvents.add(event.id);
    return order;
  })();
  inFlightPayments.set(idempotencyKey, operation);
  try { return await operation; }
  catch (error) { payments.delete(idempotencyKey); throw error; }
  finally { inFlightPayments.delete(idempotencyKey); }
}
function cancel(orderId) {
  const order = orders.get(orderId);
  if (!order) return false;
  if (order.state === "CANCELLED") return true;
  if (order.state === "PAID") return false;
  order.state = "CANCELLED"; order.version += 1; return true;
}
function snapshot(orderId) { return { order: orders.get(orderId), paymentCount: payments.size, eventCount: processedEvents.size }; }
function reset() { orders.clear(); processedEvents.clear(); payments.clear(); inFlightPayments.clear(); }
module.exports = { createOrder, handlePayment, cancel, snapshot, reset };
`;

function cases(prefix: string, explanations: string[]) {
  return sixCases(prefix, explanations);
}

export const DEBUGGING_SCENARIOS: Record<string, DebuggingScenario> = {
  "google-debug-01": {
    id: "google-debug-01", company: "Google", title: "Async Search Typeahead & Debounce Cache Invalidation", difficulty: "Hard", category: "Async state, race conditions, memory lifecycle",
    bugReport: "QA observes older, slower search responses replacing newer results. Invalidated entries can be repopulated by an in-flight request, and disposed views may still publish results.",
    paragraphs: ["Repair the request ordering, cache invalidation, and controller disposal behavior. Preserve cached fast-path results and debounce behavior.", "Explain the root cause before editing, then use the regression checks to validate stale responses, invalidation, and cleanup."],
    starterCode: googleSearchStarter, solutionCode: googleSearchSolution,
    testCases: cases("search", ["Fresh search response is returned and cached.", "A later request must win when an earlier network response resolves last.", "A cache hit avoids an additional fetch.", "Invalidation prevents an in-flight result from restoring stale cache state.", "Disposing the controller prevents pending work from publishing.", "Independent queries do not leak pending request bookkeeping."]),
    targetFunctions: ["search", "invalidate", "createSearchController", "diagnostics"],
  },
  "google-debug-02": {
    id: "google-debug-02", company: "Google", title: "Distributed Token Bucket Rate Limiter", difficulty: "Hard", category: "Concurrency, time arithmetic, rate limiting",
    bugReport: "Burst traffic intermittently exceeds the configured quota, low traffic loses fractional refill credit, and Retry-After values are wrong after partial refill.",
    paragraphs: ["Repair token refill precision and the retry estimate without allowing the bucket to exceed capacity. Consider concurrent calls sharing one bucket.", "Describe the invariant that must hold after every consume attempt and how you would make it atomic in a distributed deployment."],
    starterCode: googleRateStarter, solutionCode: googleRateSolution,
    testCases: cases("bucket", ["A fresh bucket admits up to capacity requests.", "A request is denied after the initial burst is exhausted.", "Fractional refill accumulates across short intervals.", "Long elapsed periods clamp at capacity.", "Retry-After reflects the remaining fractional token deficit.", "Clock rollback never removes tokens or creates overflow."]),
    targetFunctions: ["takeToken", "retryAfterMs", "snapshot", "reset"],
  },
  "amazon-debug-01": {
    id: "amazon-debug-01", company: "Amazon", title: "Locker Reservation & Deadlock Resolution", difficulty: "Hard", category: "Concurrency, lock ordering, cleanup",
    bugReport: "Two concurrent multi-lock reservations can deadlock when they request the same lockers in opposite orders. Duplicate lock IDs and exceptions also expose release-path defects.",
    paragraphs: ["Resolve deadlocks while preserving FIFO handoff and owner checks. Reservations must release every acquired lock on success and failure.", "Explain why a global acquisition order avoids circular wait and what trade-off it introduces."],
    starterCode: amazonLockerStarter, solutionCode: amazonLockerSolution,
    testCases: cases("locker", ["A reservation acquires and releases a single locker.", "Opposite input lock orders complete without deadlock.", "Repeated locker IDs do not self-deadlock.", "A failing reservation releases already-held lockers.", "Waiters receive each lock exactly once.", "A non-owner cannot release a lock."]),
    targetFunctions: ["reserve", "reset", "snapshot"],
  },
  "amazon-debug-02": {
    id: "amazon-debug-02", company: "Amazon", title: "Idempotent Order State Machine", difficulty: "Hard", category: "Idempotency, retries, state transitions",
    bugReport: "Network retries can submit duplicate charges. Late payment callbacks can resurrect cancelled orders, and cancellation currently accepts already-paid orders.",
    paragraphs: ["Make payment event handling idempotent under retries and concurrent delivery. Enforce legal order state transitions when cancellation and payment race.", "Discuss the limits of in-memory idempotency and how a durable transactional outbox or unique database constraint would help."],
    starterCode: amazonOrderStarter, solutionCode: amazonOrderSolution,
    testCases: cases("order", ["A valid payment transitions a pending order to paid.", "A duplicate event never calls the charge provider twice.", "Distinct events for one order retain idempotency.", "A late payment callback does not resurrect a cancelled order.", "A paid order cannot transition to cancelled.", "Concurrent duplicate deliveries share one payment operation."]),
    targetFunctions: ["createOrder", "handlePayment", "cancel", "snapshot", "reset"],
  },
};

export function getDebuggingScenario(problemId: string): DebuggingScenario | undefined {
  return DEBUGGING_SCENARIOS[problemId];
}
