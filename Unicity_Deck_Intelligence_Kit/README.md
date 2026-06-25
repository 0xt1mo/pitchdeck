# Unicity Deck Intelligence Kit

> Everything learned across a 4-day intensive building the Unicity → Greg Kidd / Hard Yaka
> seed deck (June 2026). This is the durable, shareable knowledge base — voice, audience,
> facts, craft, build system, and the hard-won lessons. Read this before touching a Unicity deck.

---

## What's in here

| File | What it holds |
|---|---|
| **[01-voice-and-bans.md](01-voice-and-bans.md)** | The 0xt1mo voice DNA, his real lines, and the HARD BANS (rail, not-X-Y, hype). |
| **[02-greg-kidd-intelligence.md](02-greg-kidd-intelligence.md)** | Who Greg is, USBC/KYA, his doctrine, what makes him lean in vs walk out. Sources. |
| **[03-fact-discipline.md](03-fact-discipline.md)** | The numbers and claims that must stay exact — the tells that lose a risk officer. |
| **[04-storytelling-playbook.md](04-storytelling-playbook.md)** | Pip Decks tactics — structure & hooks (not register). |
| **[05-build-design-responsive.md](05-build-design-responsive.md)** | The React deck app: components, fonts, colour, diagrams, export, responsive, optimization. |
| **[06-gotchas-and-lessons.md](06-gotchas-and-lessons.md)** | Every trap we hit and the fix — JSX quotes, flicker, the desktop regression, etc. |
| **[07-working-with-alan.md](07-working-with-alan.md)** | How Alan wants the work done. Read this first. |
| **[08-padra-agentic-call-center.md](08-padra-agentic-call-center.md)** | The governed-agentic-call-center play (Padra): the 5-module framework, the two-section deck, the Policy-Engine + phone-mockup visuals, the fleet/audit process, and the regulated-buyer fact-discipline. |

---

## The decks at a glance

Two options, same content spine, both built inside the real Tether React app:

| | **Option A** | **Option B** |
|---|---|---|
| Branch | `greg-kidd-tether` | `greg-kidd-optionB` |
| Worktree | `~/pitchdeck-tether` | `~/pitchdeck-optionB` |
| Shape | Integrated, problem-forward (16 slides) | Two-act: a tight pitch (≤9) → **"THE HOW"** appendix (20 slides) |
| PDF (Downloads) | `Unicity_Greg_Kidd_June_25_Draft_A.pdf` | `Unicity_Greg_Kidd_June_25_Draft_B.pdf` |
| Origin | The May-30 Tether deck frame (commit `72bc69c`) | Same, recreated in the May-29 Tether two-act structure |

Both: 0xt1mo voice, no money ask at this stage, fact-disciplined, responsive (phone/tablet/desktop), flicker-free, ~5 MB raster PDFs.

## The one-line thesis (the spine the whole deck repeats)
**"When the counterparty is a machine, trust has to travel with the money."**
Unicity binds identity, compliance, and settlement *inside the asset* — so a machine can be vouched for without a shared ledger, a venue, or a facilitator in the middle.

## The close (no money ask — first strategic conversation)
Co-design the Receive Predicate with a **bank-regulated deposit issuer** (his USBC world) — *"the first dollar that settles the moment its counterparty clears."* End on: *"Compliance has always lived in a walled garden. Put it inside the dollar, and you own the layer the agentic economy settles on."*

---

## Quickstart — build & export a deck

```bash
cd ~/pitchdeck-tether          # or ~/pitchdeck-optionB
npx vite --port 5174           # 5175 for Option B. (npm run build FAILS on tsc — never use it)
# then, with the server up:
node scripts/export-fast.mjs http://localhost:5174 ~/Downloads/Unicity_Greg_Kidd_June_25_Draft_A.pdf
```
Exporter is tuned: **deviceScaleFactor 2, JPEG q88** (retina-crisp, ~half the size of 3×, fast to load).

---

## The 10 things that matter most (if you read nothing else)

1. **Voice is law.** Restrained, systems-precise, declarative, em-dashes — never semicolons in body. See 01.
2. **Never say "rail."** Or "this is not X, this is Y." Or any hype word. Strip on sight.
3. **Greg is a former risk officer.** Overclaims ("first to solve," "the only," "unlimited") and name-drops he can't verify ("a DAC *for* BlackRock") lose the room instantly. See 02–03.
4. **Speak his language back to him:** fair access, *identity is the permission to act*, Know-Your-Agent, manage-risk-not-avoid, USBC/bank-regulated deposits.
5. **Fact-discipline is non-negotiable.** 57.5% = web traffic; 30k tx/s = per-shard *by design*; 300k = Guardtime/KSI *heritage*; the papers prove privacy + no-double-spend only. See 03.
6. **Headlines are declarative claims**, not "Label: payoff." ("The counterparty is now a machine.")
7. **Content is vertically centered** on every slide — balanced, never top-jammed.
8. **Responsive changes must be `lg:`-gated** so desktop is untouched. ALWAYS re-verify desktop after a mobile change. See 06.
9. **Export is raster** (fast to view); vector is slow. The PDF captures fully-settled (3s wait).
10. **This project matters more than any single task.** Slow down on the obvious things. See 07.

---

*Maintained by Alan Radi + Claude. Last major pass: 25 June 2026. Keep it current as the deck evolves.*
