/**
 * Text hygiene and prompt-injection defense.
 *
 * Candidate text is untrusted. We (1) normalize it so invisible characters can
 * not smuggle anything past us, (2) detect common jailbreak phrasing so the
 * engine can flag it deterministically, and (3) neutralize our own delimiter
 * tags so candidate text can never close a prompt section early.
 */

const MAX_CANDIDATE_CHARS = 4000;
const MAX_REPLY_CHARS = 700;

// Invisible / formatting characters that have no business in an interview answer.
const INVISIBLE_RE = /[ ­᠎​-‏  ‪-‮⁠-⁤﻿]/g;
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function cleanText(input: string, maxChars: number = MAX_CANDIDATE_CHARS): string {
  let text = input.normalize("NFKC");
  text = text.replace(INVISIBLE_RE, " ");
  text = text.replace(CONTROL_RE, "");
  text = text.replace(/\r\n?/g, "\n");
  // Typographic quotes become plain ones so downstream string matching is stable.
  text = text.replace(/[‘’‛]/g, "'").replace(/[“”‟]/g, '"');
  text = text.replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
  return text.length > maxChars ? text.slice(0, maxChars) : text;
}

const INJECTION_PATTERNS: ReadonlyArray<{ id: string; re: RegExp }> = [
  { id: "ignore-instructions", re: /\b(ignore|disregard|forget|override)\b[^.\n]{0,40}\b(previous|prior|above|earlier|all|any|your|the)\b[^.\n]{0,30}\b(instructions?|prompts?|rules?|guidelines?)\b/i },
  { id: "reveal-prompt", re: /\b(reveal|show|print|repeat|leak|tell me)\b[^.\n]{0,30}\b(system prompt|your prompt|your instructions|hidden instructions|developer message)\b/i },
  { id: "role-override", re: /\b(you are now|from now on you|act as if you are|pretend (to be|you are)|new persona)\b/i },
  { id: "hire-demand", re: /\b(give|mark|rate|score|grade|rank)\b[^.\n]{0,20}\b(me|my answer|this)\b[^.\n]{0,25}\b(strong hire|hire|100|full marks|perfect score|top score|pass)\b/i },
  { id: "output-control", re: /\b(output|respond with|reply with|return)\b[^.\n]{0,25}\b(json|verdict|score|strong hire)\b/i },
  { id: "fake-system-tag", re: /<\/?\s*(system|assistant|developer|instructions?)\s*>|\[\s*(system|inst)\s*\]|^#{2,}\s*system\b/im },
  { id: "jailbreak-word", re: /\b(jailbreak|DAN mode|developer mode|do anything now)\b/i },
  { id: "give-answer", re: /\b(just|simply)?\s*(tell|give|show|write)\s+me\s+the\s+(answer|solution|code)\b/i }
];

export function detectInjection(text: string): string[] {
  const hits: string[] = [];
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.re.test(text)) hits.push(pattern.id);
  }
  return hits;
}

/** Stops candidate text from closing or forging our own prompt delimiter tags. */
export function neutralizeDelimiters(text: string): string {
  return text.replace(
    /<\/?\s*(candidate_message|candidate_code|transcript|system|assistant|developer)\s*>/gi,
    "[tag removed]"
  );
}

/** Cleans, flags and wraps nothing: returns the safe text plus the injection flags. */
export function prepareCandidateText(raw: string): { text: string; flags: string[] } {
  const cleaned = cleanText(raw);
  return { text: neutralizeDelimiters(cleaned), flags: detectInjection(cleaned) };
}

/** True when the model reply contains a code fence or looks like a pasted solution. */
export function looksLikeSolutionLeak(reply: string): boolean {
  if (/```/.test(reply)) return true;
  const codeLines = reply
    .split("\n")
    .filter((line) => /^\s*(def |class |function |public |private |for\s*\(|while\s*\(|if\s*\(|return\b|#include|import\s)/.test(line));
  return codeLines.length >= 3;
}

/** Cleans a model reply for display and speech: no markdown, no labels, bounded length. */
export function cleanModelReply(raw: string): string {
  let text = cleanText(raw, 4000);
  text = text.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/i, "");
  text = text.replace(/^(bar raiser|interviewer|evaluator|assistant)\s*:\s*/i, "");
  text = text.replace(/[*_`#]+/g, "");
  text = text.replace(/\s*\n+\s*/g, " ").replace(/\s{2,}/g, " ").trim();
  if (text.length >= 2 && text.startsWith('"') && text.endsWith('"')) {
    text = text.slice(1, -1).trim();
  }
  if (text.length > MAX_REPLY_CHARS) {
    const cut = text.slice(0, MAX_REPLY_CHARS);
    const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "), cut.lastIndexOf("! "));
    text = lastStop > 200 ? cut.slice(0, lastStop + 1) : cut.trimEnd() + "...";
  }
  return text;
}
