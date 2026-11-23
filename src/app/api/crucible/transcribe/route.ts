import { NextRequest, NextResponse } from "next/server";
import { guard } from "../../../../lib/rateGuard";

export async function POST(req: NextRequest) {
  const blocked = await guard(req, { scope: "transcribe", user: 60, anon: 15, ai: true, maxBytes: 12000000 });
  if (blocked) return blocked;
  try {
    const formData = await req.formData();
    const audioBlob = formData.get("audio") as Blob | null;

    if (!audioBlob || audioBlob.size === 0) {
      return NextResponse.json({ text: "", warning: "Empty audio blob" }, { status: 400 });
    }

    if (audioBlob.size > 10 * 1024 * 1024) {
      return NextResponse.json({ text: "", warning: "Audio is too large" }, { status: 413 });
    }

    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) {
      return NextResponse.json({ error: "GROQ_API_KEY missing" }, { status: 500 });
    }

    const groqData = new FormData();
    groqData.append("file", audioBlob, "audio.webm");
    groqData.append("model", "whisper-large-v3-turbo");
    groqData.append("language", "en");

    const groqRes = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
      },
      body: groqData,
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("[WHISPER TRANSCRIPTION ERROR]:", errText);
      return NextResponse.json({ text: "" });
    }

    const data = await groqRes.json();
    const text = (data.text || "").trim();

    return NextResponse.json({ text });
  } catch (err: any) {
    console.error("[CRUCIBLE TRANSCRIBE EXCEPTION]:", err);
    return NextResponse.json({ text: "", error: err.message }, { status: 500 });
  }
}