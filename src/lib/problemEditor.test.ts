import { describe, expect, it } from "vitest";
import { addQuestion, deleteQuestion, getQuestion, listQuestions, moveQuestion, resetQuestion, undoChange, updateQuestion } from "./problemEditor";

// Needs a local Postgres: DATABASE_URL=... npx vitest run src/lib/problemEditor.test.ts
const d = process.env.DATABASE_URL ? describe : describe.skip;

d("question editor (database)", () => {
  it("update, reorder, add, delete and undo", async () => {
    const all = await listQuestions();
    const first = all.find((x) => x.company === "Zomato" && x.setId != null)!;
    const id = first.id;
    const before = (await getQuestion(id)).row.data as Record<string, unknown>;

    const historyBefore = (await getQuestion(id)).history.length;
    await updateQuestion(id, { data: before });                       // no edit -> no change recorded
    expect((await getQuestion(id)).history.length).toBe(historyBefore);

    await updateQuestion(id, { data: { ...before, title: "Edited title" } });
    expect(((await getQuestion(id)).row.data as { title: string }).title).toBe("Edited title");
    await expect(updateQuestion(id, { data: { ...before, difficulty: "Wrong" } })).rejects.toThrow(/Invalid question/);

    await undoChange((await getQuestion(id)).history[0].id);
    expect(((await getQuestion(id)).row.data as { title: string }).title).toBe((before as { title: string }).title);

    await moveQuestion(id, first.setId, 3);
    const set = (await listQuestions()).filter((x) => x.company === "Zomato" && x.role === first.role && x.roundId === first.roundId && x.setId === first.setId);
    expect(set.map((x) => x.position)).toEqual(set.map((_, i) => i + 1));

    await addQuestion(id, id + "-copy-test");
    expect((await getQuestion(id + "-copy-test")).row.id).toBe(id + "-copy-test");
    await deleteQuestion(id + "-copy-test");
    await expect(getQuestion(id + "-copy-test")).rejects.toThrow(/not found/);
    await undoChange((await getQuestion(id)).history[0].id);          // undo the move
    await resetQuestion(id).catch(() => undefined);
  });
});
