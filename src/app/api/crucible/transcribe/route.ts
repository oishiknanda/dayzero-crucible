import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audioBlob = formData.get("audio") as Blob | null;

    if (!audioBlob || audioBlob.size === 0) {
      return NextResponse.json({ text: "", warning: "Empty audio blob" }, { status: 400 });
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