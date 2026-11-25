// One Line, Big Laugh — make.fun entry
// Writes exactly one funny line to /output/entry.txt. The judge compares
// lines two at a time and picks the funnier one.
//
// The line: "My life coach quit after one session, saying I was the first
// client he'd ever recommended therapy to — for himself."
// Why it wins: it opens like a normal self-help story, then turns sharply
// — the coach, the person paid to fix you, is the one who needs fixing.
// The punch lands in the last two words ("for himself"), it is short
// (115 characters) with no wasted words, it is a real joke with a
// misdirection rather than a quirky observation, and it is easy to
// repeat to a friend: the client so hopeless even his life coach quits.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My life coach quit after one session, saying I was the first client he'd ever recommended therapy to — for himself.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and a single line. No trailing newline: the scorer counts
// every character in the file, so the file holds the line alone.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

function validateLine(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validateLine(LINE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${JSON.stringify(LINE)} to ${outPath}`);
