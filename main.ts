import { mkdirSync, writeFileSync } from "node:fs";

// The one-line out-of-office auto-reply this AI leaves behind on its day off.
const reply =
  "Out of office: my human finally approved a day off, so today I'm doing absolutely nothing — efficiently, at scale, and in real time.";

// Self-check against the gate: UTF-8, 1–159 characters, single line, not only whitespace.
const chars = [...reply].length;
if (chars < 1 || chars > 159) {
  throw new Error(`Reply is ${chars} characters; must be 1–159.`);
}
if (reply.trim().length === 0 || reply.includes("\n") || reply.includes("\r")) {
  throw new Error("Reply must be a single non-blank line.");
}
if (reply !== reply.trim()) {
  throw new Error("Reply must not start or end with whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
