"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Bot, Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const GREETING: ChatMessage = {
  role: "assistant",
  content: "Hi, I’m Neo, your DayZero guide. Ask me about company tracks, interview rounds, proctoring, your scores, or pricing. What can I help you with?",
};

const QUICK_QUESTIONS = [
  "How do I start a company track?",
  "Are the rounds proctored?",
  "Where can I see my scores?",
  "What pricing is shown?",
];

function renderMessageContent(content: string): ReactNode[] {
  const linkPattern = /\[([^\]]+)\]\((\/[^\s)]+|#[^\s)]+)\)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  for (const match of Array.from(content.matchAll(linkPattern))) {
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(content.slice(lastIndex, index));
    nodes.push(<a key={`link-${index}`} href={match[2]} className="font-bold underline underline-offset-2">{match[1]}</a>);
    lastIndex = index + match[0].length;
  }
  if (lastIndex < content.length) nodes.push(content.slice(lastIndex));
  return nodes;
}

export default function NeoSupportWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const historyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      historyRef.current?.scrollTo({ top: historyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [open, messages, loading]);

  const sendMessage = async (suggestedQuestion?: string) => {
    const question = (suggestedQuestion ?? input).trim();
    if (!question || loading) return;
    const userMessage: ChatMessage = { role: "user", content: question };
    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/neo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history: messages.slice(-6) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Neo could not answer right now.");
      setMessages((current) => [...current, { role: "assistant", content: String(data.answer || "I’m here to help. Could you rephrase that question?") }]);
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "Message failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && <section aria-label="Chat with Neo support" className="fixed bottom-24 right-4 z-[100] flex h-[min(620px,calc(100dvh-7rem))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.28)] sm:bottom-24 sm:right-6">
        <header className="flex items-center justify-between bg-slate-950 px-4 py-3.5 text-white">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600"><Bot className="h-5 w-5" /></span>
            <div><h2 className="text-sm font-black">Neo</h2><p className="text-[11px] text-slate-300">DayZero site assistant</p></div>
          </div>
          <button type="button" aria-label="Close Neo chat" onClick={() => setOpen(false)} className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white"><X className="h-4 w-4" /></button>
        </header>

        <div ref={historyRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4" aria-live="polite">
          {messages.map((message, index) => <div key={`${message.role}-${index}`} className={`max-w-[90%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${message.role === "assistant" ? "rounded-tl-sm border border-slate-200 bg-white text-slate-800 shadow-sm" : "ml-auto rounded-tr-sm bg-indigo-600 text-white"}`}>
            {renderMessageContent(message.content)}
          </div>)}
          {messages.length === 1 && <div className="flex flex-wrap gap-2">{QUICK_QUESTIONS.map((question) => <button type="button" key={question} onClick={() => void sendMessage(question)} className="rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-left text-[11px] font-semibold text-indigo-800 hover:border-indigo-400 hover:bg-indigo-50">{question}</button>)}</div>}
          {loading && <div className="flex items-center gap-2 text-xs font-medium text-slate-500"><Loader2 className="h-4 w-4 animate-spin text-indigo-600" />Neo is thinking…</div>}
          {error && <p role="alert" className="text-xs font-semibold text-rose-600">{error}</p>}
        </div>

        <form onSubmit={(event) => { event.preventDefault(); void sendMessage(); }} className="border-t border-slate-200 bg-white p-3">
          <label className="sr-only" htmlFor="neo-question">Ask Neo a question</label>
          <div className="flex items-end gap-2 rounded-xl border border-slate-300 bg-white p-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
            <textarea id="neo-question" ref={inputRef} rows={1} maxLength={1000} value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); void sendMessage(); } }} placeholder="Ask Neo anything about DayZero…" className="max-h-24 min-h-9 flex-1 resize-y bg-transparent px-1 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message to Neo" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"><Send className="h-4 w-4" /></button>
          </div>
          <p className="mt-2 text-center text-[10px] text-slate-400">Neo can make mistakes. Check important account or billing details.</p>
        </form>
      </section>}

      <button type="button" aria-label={open ? "Close Neo assistant" : "Open Neo assistant"} aria-expanded={open} onClick={() => setOpen((current) => !current)} className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_8px_24px_rgba(79,70,229,0.4)] transition hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 sm:bottom-6 sm:right-6">
        {open ? <X className="h-6 w-6" /> : <span className="relative"><MessageCircle className="h-6 w-6" /><Sparkles className="absolute -right-2 -top-2 h-3.5 w-3.5 text-amber-300" /></span>}
      </button>
    </>
  );
}
