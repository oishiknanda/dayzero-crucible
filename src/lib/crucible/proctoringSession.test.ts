import { afterEach, describe, expect, it } from "vitest";
import { authorizeProctoringSession, clearProctoringSession, getProctoringStream, readProctoringGrant } from "./proctoringSession";

afterEach(() => clearProctoringSession("test-session"));

describe("proctoring session handoff", () => {
  it("keeps a practice grant scoped to its assessment session", () => {
    authorizeProctoringSession("test-session", "practice", null);

    expect(readProctoringGrant("test-session")?.mode).toBe("practice");
    expect(readProctoringGrant("another-session")).toBeNull();
    expect(getProctoringStream("test-session")).toBeNull();
  });

  it("clears authorization when an assessment session is closed", () => {
    authorizeProctoringSession("test-session", "practice", null);
    clearProctoringSession("test-session");

    expect(readProctoringGrant("test-session")).toBeNull();
  });
});
