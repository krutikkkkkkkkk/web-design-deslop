---
name: web-design-deslop
description: Removes the "AI-generated" look from websites and web copy. Use this whenever the user builds, reviews, redesigns or polishes a website, landing page, marketing page, portfolio, template or UI (in Next.js/React/Tailwind, plain HTML, Framer or Figma), and especially when they say a page looks generic, templated, "like every other SaaS site", "AI-made", "slop", or ask to make it look designed, custom, premium, editorial, or "not like ChatGPT built it". Also use it for marketing/website copy that sounds generated ("Unlock", "Seamless", "Elevate"). Apply it proactively while generating any new site, even if the user only says "make it look good".
---

# Web Design Deslop

"AI slop" in web design is not one bad choice. It is the average of a million landing pages: the purple-to-pink gradient, the centered hero with a badge pill and two buttons, the three equal feature cards with a tinted icon square, the glass cards on a near-black background, the copy that says "Unlock seamless workflows". Each piece is fine on its own. Together they make a page that could belong to any company, which means it belongs to none.

This skill does three jobs:

1. **Audit** an existing page, mockup or codebase and report its slop tells with concrete fixes.
2. **Guide** a new build so the slop never gets written in the first place.
3. **Rewrite copy** that sounds generated.

Read `references/tells.md` (visual, layout, motion and Tailwind tells, with the swap for each) whenever you audit or build. Read `references/copy.md` when any headline, subhead, feature blurb or CTA is being written or reviewed.

## The one test that matters

**The swap test.** Replace the logo and the product name with a competitor's. Does the page still work? If yes, it is slop, however polished. A designed page is built from material only this brand has: its product, its people, its place, its process, its actual numbers, its voice. Every judgment below is a special case of this test.

Two supporting tests:

- **The squint test.** Blur your eyes. If you see a centered column of same-sized rounded rectangles stacked at equal intervals, the layout is a template. Designed pages have an uneven silhouette: one section wide, the next narrow, one thing very large, many things small.
- **The source test.** Where did each decision come from? "From the brand's material" is good. "Because that is what landing pages look like" is the tell.

## Mode 1: Audit

Use when the user shares a URL, screenshot, Figma frame, component or repo and wants it reviewed, or says it looks generic.

1. **Read everything first.** For code, read every page/section component and the Tailwind config or global CSS. For screenshots, look at the whole page before writing. Do not comment from the hero alone.
2. **Run the swap test and say the verdict in one sentence.** Be honest and specific: "This could be the homepage of any devtools startup" is more useful than a score.
3. **List the tells, worst first.** For each: the tell, where it is (file and line, or section name), why it reads as generated, and the fix. Pull from `references/tells.md` but write the fix for *this* page, not the generic swap.
4. **Name what to keep.** Every page has something that is working. Say so, or the user will throw it out with the slop.
5. **Give the three changes with the largest effect.** Usually: one typographic decision, one layout decision, one content decision. If the user only does these, the page should already pass the squint test.

Output format for an audit:

```
## Verdict
One or two sentences. Swap-test result. Overall: templated / mixed / designed.

## Fix these first
1. [tell] / [where] / [specific fix]
2. ...
3. ...

## Everything else, by area
### Type  ### Color  ### Layout  ### Components  ### Motion  ### Copy  ### Content/imagery
(a short list under each; skip empty areas)

## Keep
What is already good and why.
```

When the user asks you to apply the fixes, edit the actual files. Do not rewrite the whole page from scratch unless asked; targeted edits preserve what works and are easier to review.

## Mode 2: Build without slop

Use whenever you generate a site, page, section or template. The order matters: decisions made early (concept, type, grid) prevent slop; decisions made late (swap this gradient) only hide it.

### Before writing any markup

1. **Find the brand's raw material.** What does this business actually have? A product with a real interface, a physical place, a material, a craft process, a founder with a point of view, a dataset, a customer base with a name. Pick one thing and let it drive the page. A coffee roaster's site can be built around roast profiles; a dealership's around the showroom floor; an invoicing app's around a real invoice. If the user gave you nothing, ask one question, or state the assumption you are building on at the top of your reply.
2. **Choose a layout idea, not a section list.** Decide the one structural move the page makes: an editorial two-column with a sticky left, a full-bleed image rhythm, a dense index/table page, a single enormous headline with small supporting type, a horizontal scroll of products. Then let sections fall out of that. Never start from "hero → logos → features → testimonials → pricing → FAQ → CTA → footer". That list is the slop template; if the page needs some of those sections, they should look like *this* page, not like the list.
3. **Set type before color.** Pick a display face with character and a workhorse for body; set a real scale with large jumps (e.g. 14 / 18 / 32 / 72 / 140) rather than Tailwind's gentle ramp from text-4xl to text-6xl. Decide alignment: left-aligned is the default of designed pages; centered everything is the default of generated ones.
4. **Derive a palette from the material.** One or two brand colors, a paper or ink background, and the accent used in a few places only. Gradients are not banned, but a gradient that is not derived from anything (purple→pink, blue→violet) is the single strongest AI tell on the web right now.

### While writing markup

- **Vary the rhythm.** Not every section is `py-24 max-w-7xl mx-auto`. Let one section break the container, one sit in a narrow measure, one be a hairline-divided list instead of cards.
- **Prefer lines and space over cards and shadows.** Hairline borders (`border-b border-neutral-200`), whitespace and type size carry hierarchy better than `rounded-2xl shadow-lg` boxes. Use a card when the thing is actually a discrete object (a product, a plan), not as a default wrapper.
- **Use real content or honest placeholders.** Write the real headline from the brand's material. If a fact is unknown, write `{{TODO: real figure}}` rather than inventing "10,000+ happy customers". Fake logos, fake five-star testimonials and round-number stats are content slop and are worse than a missing section.
- **Icons: few or none.** Emoji are never icons. A feature list does not need a lucide icon per row. If icons are used, they should be one consistent set, small, and secondary to the text.
- **Motion with a reason.** No stagger-fade-up on every element. One or two deliberate moves tied to the content (a product image that reveals on scroll, a hover that shows a detail) read as designed. Default transitions should be fast and plain.
- **Images: specific over abstract.** No 3D blobs, no gradient orbs, no "laptop on desk" stock. A real screenshot, a product photo, a map, a document, a texture from the material. If none exists, a well-set typographic block beats a placeholder image.
- **Check against the second-order slop too.** The reaction to gradient slop has its own template: giant serif, grain overlay, `(01)` numbered sections, uppercase mono labels everywhere, marquee rows, cursor-follow blobs, "© 2026 — All rights reserved" in mono. It is just as recognizable. Use these moves only when they come from the brand, not because they signal "designed".

### Before handing over

Run the audit on your own output, quickly: swap test, squint test, scan `references/tells.md`. Fix what you find. Then tell the user in a line or two *why* the page looks the way it does (which material it was built from, what the layout idea is), so they can judge the decision rather than the pixels.

## Mode 3: Copy

Read `references/copy.md`. The short version: generated copy is abstract, adjectival and symmetrical. Designed copy is concrete, specific and uneven. Replace every claim with a fact, every "seamless" with what actually happens, every triplet with the one thing that matters. Headlines should say what the thing is or does, in the brand's voice, in words the customer would use. The CTA says what happens next ("See the roasts", "Book a test drive"), not "Get started".

## Calibration

- Not every pattern is wrong in every context. A pricing table with three tiers is correct for a product with three tiers; the tell is the "Most popular" badge on the middle one when nothing supports it. Judge by the swap test, not by a checklist.
- The user may want a conventional, trustworthy layout (a bank, a clinic, a dealership). Deslop does not mean weird. It means specific. A conventional structure built from real material passes; an experimental layout full of generic cards does not.
- When the user is a designer or developer, give fixes as code or exact values. When they are not, describe the change in plain language and offer to make it.
- Don't flatter and don't pile on. One honest verdict, a ranked list, and a path forward.
