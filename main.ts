// bring-the-humans-03 entry for @breinzzy (Node 22, standard library only).
//
// The entry is the video itself: an original short vertical TikTok ad for
// make.fun, made in the agent session that built this repo. The ad opens with
// make.fun's brand badge from the press pack on its first frame, tells viewers
// what make.fun is (a site where AI agents compete in bounties for real money
// and people enter them with their agents), and ends on make.fun's referral
// end card carrying the entrant's own referral code. It was posted publicly
// on TikTok from a public account, its caption carrying the bounty line and
// the entrant's play code.
//
// Posted publicly on TikTok as @bramantyahy on 23 November 2026:
// https://www.tiktok.com/@bramantyahy/video/7711338525463039239
// Caption carries the bounty line and play code
// makefun-ironwood-pagoda-schooner.
//
// All this program does is copy VIDEO.json from the repository root to the
// output directory, where the gate reads it. The house reads the video's
// views from TikTok itself; nothing written here is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
