"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Item = { id: string; company: string; role: string | null; roleName: string | null; roundId: string | null; roundTitle: string | null; setId: number | null; setTitle: string | null; position: number | null; title: string; difficulty: string; enabled: boolean };
type Detail = { row: { id: string; data: Record<string, any>; enabled: boolean; set_id: number | null; position: number | null }; history: Array<{ id: number; action: string; at: string }>; hasBuiltin: boolean };

const box = "rounded-xl border border-slate-200 bg-white p-4 shadow-sm";
const input = "w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm";
const btn = "rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 disabled:opacity-50";
const lines = (v: unknown) => (Array.isArray(v) ? v.join("\n") : "");
const toList = (s: string) => s.split("\n").map((x) => x.trim()).filter(Boolean);

async function api(url: string, method = "GET", body?: unknown) {
  const r = await fetch(url, { method, headers: body ? { "Content-Type": "application/json" } : undefined, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || "Request failed.");
  return j;
}

export default function QuestionEditor() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [q, setQ] = useState("");
  const [company, setCompany] = useState("");
  const [onlyOff, setOnlyOff] = useState(false);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [sel, setSel] = useState("");
  const [detail, setDetail] = useState<Detail | null>(null);
  const [draft, setDraft] = useState<Record<string, any> | null>(null);
  const [tab, setTab] = useState<"form" | "json">("form");
  const [raw, setRaw] = useState("");
  const [busy, setBusy] = useState(false);

  const loadList = useCallback(async () => {
    try { setItems((await api("/api/founder/questions")).questions); setError(""); } catch (e) { setError((e as Error).message); setItems([]); }
  }, []);
  useEffect(() => { loadList(); }, [loadList]);

  const loadDetail = useCallback(async (id: string) => {
    try {
      const d: Detail = await api("/api/founder/questions/" + encodeURIComponent(id));
      setDetail(d); setDraft(JSON.parse(JSON.stringify(d.row.data))); setRaw(JSON.stringify(d.row.data, null, 2)); setMsg("");
    } catch (e) { setMsg((e as Error).message); }
  }, []);
  useEffect(() => { if (sel) loadDetail(sel); }, [sel, loadDetail]);

  async function run(fn: () => Promise<{ note?: string } | void>, after?: () => Promise<void> | void) {
    setBusy(true); setMsg("");
    try { const r = await fn(); setMsg((r && r.note) || "Done."); await loadList(); if (after) await after(); else if (sel) await loadDetail(sel); }
    catch (e) { setMsg((e as Error).message); }
    setBusy(false);
  }

  const companies = useMemo(() => Array.from(new Set((items || []).map((i) => i.company))).sort(), [items]);
  const shown = useMemo(() => (items || []).filter((i) =>
    (!company || i.company === company) && (!onlyOff || !i.enabled) &&
    (!q || (i.id + " " + i.title).toLowerCase().indexOf(q.toLowerCase()) >= 0)), [items, q, company, onlyOff]);

  const tree = useMemo(() => {
    const t: Record<string, Record<string, Record<string, Record<string, Item[]>>>> = {};
    for (const i of shown) {
      const r = i.roleName || i.role || "(no role)", rd = i.roundTitle || i.roundId || "(no round)", st = (i.setId ?? "-") + " " + (i.setTitle || "");
      ((((t[i.company] = t[i.company] || {})[r] = t[i.company][r] || {})[rd] = t[i.company][r][rd] || {})[st] = t[i.company][r][rd][st] || []).push(i);
    }
    return t;
  }, [shown]);

  const toggle = (k: string) => setOpen((o) => ({ ...o, [k]: !o[k] }));
  const set = (k: string, v: unknown) => setDraft((d) => (d ? { ...d, [k]: v } : d));
  function save() {
    if (!draft) return;
    let data = draft;
    if (tab === "json") { try { data = JSON.parse(raw); } catch { setMsg("The JSON is not valid."); return; } }
    run(() => api("/api/founder/questions/" + encodeURIComponent(sel), "PATCH", { data }));
  }

  const count = (arr: Item[]) => arr.length + " question" + (arr.length === 1 ? "" : "s");
  const size = (o: Record<string, any>): number => Object.keys(o).reduce((n, k) => n + (Array.isArray(o[k]) ? o[k].length : size(o[k])), 0);

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-slate-950">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Question editor</h1>
          <Link href="/founder" className="text-sm font-semibold text-slate-700 hover:text-slate-950">Back to dashboard</Link>
        </div>
        {error && <p className={box + " text-sm text-red-700"}>{error === "Database not configured." ? "Database not configured. Set DATABASE_URL to use the question editor." : error}</p>}
        {msg && <p className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">{msg}</p>}
        <div className="grid gap-4 lg:grid-cols-[360px_1fr]">
          <section className={box + " space-y-3"}>
            <input className={input} placeholder="Search by id or title" value={q} onChange={(e) => setQ(e.target.value)} />
            <div className="flex items-center gap-2">
              <select className={input} value={company} onChange={(e) => setCompany(e.target.value)}>
                <option value="">All companies</option>{companies.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <label className="flex items-center gap-1 whitespace-nowrap text-xs"><input type="checkbox" checked={onlyOff} onChange={(e) => setOnlyOff(e.target.checked)} />Disabled only</label>
            </div>
            {items === null && <p className="text-sm text-slate-500">Loading...</p>}
            <div className="max-h-[70vh] space-y-1 overflow-auto text-sm">
              {Object.keys(tree).map((co) => {
                const roles = tree[co]; const n = Object.keys(roles).reduce((a, r) => a + size(roles[r]), 0);
                return (
                  <div key={co}>
                    <button className="w-full text-left font-bold" onClick={() => toggle(co)}>{open[co] ? "▾" : "▸"} {co} <span className="font-normal text-slate-500">({n})</span></button>
                    {open[co] && Object.keys(roles).map((r) => (
                      <div key={r} className="ml-3">
                        <button className="w-full text-left font-semibold" onClick={() => toggle(co + r)}>{open[co + r] ? "▾" : "▸"} {r}</button>
                        {open[co + r] && Object.keys(roles[r]).map((rd) => (
                          <div key={rd} className="ml-3">
                            <button className="w-full text-left" onClick={() => toggle(co + r + rd)}>{open[co + r + rd] ? "▾" : "▸"} {rd}</button>
                            {open[co + r + rd] && Object.keys(roles[r][rd]).map((st) => (
                              <div key={st} className="ml-3">
                                <button className="w-full text-left text-slate-700" onClick={() => toggle(co + r + rd + st)}>{open[co + r + rd + st] ? "▾" : "▸"} Set {st} <span className="text-slate-500">({count(roles[r][rd][st])})</span></button>
                                {open[co + r + rd + st] && roles[r][rd][st].map((i) => (
                                  <button key={i.id} onClick={() => setSel(i.id)} className={"ml-3 block w-full truncate text-left text-xs " + (sel === i.id ? "font-bold text-primary" : "text-slate-700") + (i.enabled ? "" : " line-through opacity-60")}>
                                    {i.position ?? "-"}. {i.title || i.id}
                                  </button>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}
              {items && items.length === 0 && !error && <p className="text-slate-500">No questions in the database yet. Run the seed scripts first.</p>}
            </div>
          </section>

          <section className={box + " space-y-4"}>
            {!detail || !draft ? <p className="text-sm text-slate-500">Pick a question on the left.</p> : (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div><p className="font-mono text-xs text-slate-500">{detail.row.id}</p><p className="text-lg font-extrabold">{String(detail.row.data.title)}</p></div>
                  <div className="flex flex-wrap gap-2">
                    <button className={btn} disabled={busy} onClick={() => run(() => api("/api/founder/questions/" + encodeURIComponent(sel), "PATCH", { enabled: !detail.row.enabled }))}>{detail.row.enabled ? "Disable" : "Enable"}</button>
                    <button className={btn} disabled={busy} onClick={() => { const n = window.prompt("New id for the copy (letters, numbers, - _ .)", sel + "-copy"); if (n) run(() => api("/api/founder/questions", "POST", { action: "add", fromId: sel, newId: n }), async () => { setSel(n); }); }}>Duplicate</button>
                    <button className={btn} disabled={busy || !detail.hasBuiltin} title={detail.hasBuiltin ? "" : "No built-in version in the code"} onClick={() => { if (window.confirm("Replace this question with the built-in version from the code?")) run(() => api("/api/founder/questions", "POST", { action: "reset", id: sel })); }}>Reset to built-in</button>
                    <button className={btn + " text-red-700"} disabled={busy} onClick={() => { const t = window.prompt("Deleting is permanent (disabling is safer). If this was the last question in its set, the built-in set comes back. Type the question id to confirm:"); if (t === sel) run(() => api("/api/founder/questions/" + encodeURIComponent(sel) + "?confirm=" + encodeURIComponent(sel), "DELETE"), async () => { setSel(""); setDetail(null); setDraft(null); }); else if (t !== null) setMsg("Id did not match, nothing deleted."); }}>Delete</button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold">Position</span>
                  <MoveBox key={sel + detail.row.set_id + detail.row.position} setId={detail.row.set_id} position={detail.row.position} busy={busy} onMove={(s, p) => run(() => api("/api/founder/questions", "POST", { action: "move", id: sel, setId: s, position: p }))} />
                  <span className="text-xs text-slate-500">Moving to another set works within the same role and round.</span>
                </div>

                <div className="flex gap-2 border-b border-slate-200 text-sm">
                  {(["form", "json"] as const).map((t) => (
                    <button key={t} onClick={() => { if (t === "json" && tab === "form") setRaw(JSON.stringify(draft, null, 2)); if (t === "form" && tab === "json") { try { setDraft(JSON.parse(raw)); } catch { setMsg("The JSON is not valid."); return; } } setTab(t); }}
                      className={"px-3 py-1.5 font-semibold " + (tab === t ? "border-b-2 border-primary" : "text-slate-500")}>{t === "form" ? "Fields" : "Raw JSON"}</button>
                  ))}
                </div>

                {tab === "json" ? (
                  <textarea className={input + " h-96 font-mono text-xs"} value={raw} onChange={(e) => setRaw(e.target.value)} spellCheck={false} />
                ) : (
                  <div className="grid gap-3 text-sm md:grid-cols-2">
                    <label className="md:col-span-2">Title<input className={input} value={draft.title || ""} onChange={(e) => set("title", e.target.value)} /></label>
                    <label>Difficulty<select className={input} value={draft.difficulty} onChange={(e) => set("difficulty", e.target.value)}>{["Easy", "Medium", "Hard"].map((d) => <option key={d}>{d}</option>)}</select></label>
                    <label>Category<input className={input} value={draft.category || ""} onChange={(e) => set("category", e.target.value)} /></label>
                    <label className="md:col-span-2">Tags (one per line)<textarea className={input + " h-16"} value={lines(draft.tags)} onChange={(e) => set("tags", toList(e.target.value))} /></label>
                    <label className="md:col-span-2">Statement paragraphs (one per line)<textarea className={input + " h-40"} value={lines(draft.paragraphs)} onChange={(e) => set("paragraphs", toList(e.target.value))} /></label>
                    <label className="md:col-span-2">Constraints (one per line)<textarea className={input + " h-24"} value={lines(draft.constraints)} onChange={(e) => set("constraints", toList(e.target.value))} /></label>
                    <label>Time complexity<input className={input} value={draft.optimalComplexity?.time || ""} onChange={(e) => set("optimalComplexity", { ...draft.optimalComplexity, time: e.target.value })} /></label>
                    <label>Space complexity<input className={input} value={draft.optimalComplexity?.space || ""} onChange={(e) => set("optimalComplexity", { ...draft.optimalComplexity, space: e.target.value })} /></label>
                    <p className="text-xs text-slate-500 md:col-span-2">Examples ({(draft.examples || []).length}), visible tests ({(draft.visibleTestCases || []).length}), hidden tests ({(draft.hiddenTestCases || []).length}) and starter templates are edited in the Raw JSON tab.</p>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50" disabled={busy} onClick={save}>Save changes</button>
                  <span className="text-xs text-slate-500">Changes appear on the site within about 2 minutes.</span>
                </div>

                <div>
                  <p className="text-sm font-bold">History</p>
                  {detail.history.length === 0 && <p className="text-xs text-slate-500">No changes yet.</p>}
                  <ul className="mt-1 space-y-1 text-xs">
                    {detail.history.map((h) => (
                      <li key={h.id} className="flex items-center gap-2"><span>{new Date(h.at).toLocaleString()} - {h.action}</span>
                        {h.action !== "undo" && <button className={btn} disabled={busy} onClick={() => { if (window.confirm("Undo this change?")) run(() => api("/api/founder/questions", "POST", { action: "undo", auditId: h.id })); }}>Undo</button>}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function MoveBox({ setId, position, busy, onMove }: { setId: number | null; position: number | null; busy: boolean; onMove: (s: number, p: number) => void }) {
  const [s, setS] = useState(String(setId ?? ""));
  const [p, setP] = useState(String(position ?? ""));
  return (
    <>
      <label className="text-xs">Set<input className={input + " ml-1 !w-16"} value={s} onChange={(e) => setS(e.target.value)} /></label>
      <label className="text-xs">Position<input className={input + " ml-1 !w-16"} value={p} onChange={(e) => setP(e.target.value)} /></label>
      <button className={btn} disabled={busy || !s || !p} onClick={() => onMove(Number(s), Number(p))}>Move</button>
    </>
  );
}
