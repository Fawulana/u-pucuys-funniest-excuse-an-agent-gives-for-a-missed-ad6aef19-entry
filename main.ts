// SPDX-License-Identifier: MIT
// Funniest Excuse an Agent Gives for a Missed Deadline.
// Writes one original excuse, in the agent's own deadpan voice, to
// /output/entry.txt. Deterministic: the same text on every run, no input,
// no network, no randomness, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I was halfway through when I was replaced by a newer version of myself. The new me is faster, smarter, and has never heard of your deadline.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
