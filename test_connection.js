const fs = require("fs");
const path = require("path");

function getEnvKeys() {
  const env = {};
  [".env.local", ".env"].forEach(f => {
    const p = path.resolve(f);
    if (fs.existsSync(p)) {
      const lines = fs.readFileSync(p, "utf8").split("\n");
      lines.forEach(l => {
        const trimmed = l.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const eqIdx = trimmed.indexOf("=");
          if (eqIdx !== -1) {
            const k = trimmed.slice(0, eqIdx).trim();
            let v = trimmed.slice(eqIdx + 1).trim();
            if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
              v = v.slice(1, -1);
            }
            env[k] = v;
          }
        }
      });
    }
  });
  return env;
}

const env = getEnvKeys();
const groqKey = env.GROQ_API_KEY;
const geminiKey = env.GEMINI_API_KEY;

async function checkLive() {
  if (groqKey) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + groqKey },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: "You are an Amazon Bar Raiser. Candidate says: 'I will use a Prefix Tree.' Reply in 1 sentence." }]
      })
    });
    console.log("Groq (llama-3.1-8b-instant) Status:", res.status);
    if (res.ok) {
      const data = await res.json();
      console.log("✔ LIVE GROQ INTERVIEWER:", data.choices?.[0]?.message?.content);
      return;
    }
  }

  if (geminiKey) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${geminiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: "You are an Amazon Bar Raiser. Candidate says: 'I will use a Prefix Tree.' Reply in 1 sentence." }] }]
      })
    });
    console.log("Gemini-3.8-flash Status:", res.status);
    if (res.ok) {
      const data = await res.json();
      console.log("✔ LIVE GEMINI INTERVIEWER:", data.candidates?.[0]?.content?.parts?.[0]?.text);
    }
  }
}

checkLive();