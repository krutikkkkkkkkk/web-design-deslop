# Catalog of AI web design tells

Each entry: the tell, why it reads as generated, and the swap. Tailwind class names are given because that is where most of these get written; the idea transfers to Framer, Figma and plain CSS. A tell is only a tell when it is unmotivated; the "why" tells you when it is fine.

Contents: 1 Color · 2 Type · 3 Hero · 4 Sections and layout · 5 Components · 6 Motion · 7 Imagery · 8 Dark mode · 9 Second-order slop · 10 Tailwind swap table · 11 Quick scan checklist

---

## 1. Color

**Purple/indigo → pink/fuchsia gradient.** The default output of every model and every template since 2023. Nothing in most brands is purple. Swap: one brand color derived from the material (the packaging, the product UI, the building), a paper or ink neutral, and no gradient unless the brand has one.

**Gradient text on headlines** (`bg-clip-text text-transparent bg-gradient-to-r ...`). Reads as "trying to look premium". Swap: solid ink; make the headline big instead.

**Gradient orbs / blurred blobs in the background** (`absolute blur-3xl bg-purple-500/30 rounded-full`). Decorative fog with no referent. Swap: remove. If the background needs life, use something from the material: a photo, a texture, a pattern of the product, a solid color block.

**Neon accent on near-black** (`bg-[#0a0a0a]` + `text-emerald-400`/`violet-400`). The devtools-startup uniform. Fine for a devtools startup with a reason; wrong for everyone else.

**Tailwind defaults as the palette.** `text-gray-900` / `text-gray-600` / `bg-gray-50` / `bg-indigo-600`. Every unmodified project has these, so a page that uses them unmodified looks like every unmodified project. Swap: define brand tokens in the config and use them; even a warm or cool tint on the neutrals changes everything.

**Tinted icon squares** (`bg-indigo-100 text-indigo-600 rounded-lg p-3`). See Components.

## 2. Type

**Inter / Poppins / Montserrat / Plus Jakarta / DM Sans as the only face.** Inter is a fine UI font and an anonymous display font. Swap: a display face with a point of view for headlines (a grotesk with quirks, a serif, a mono, something from the brand's era or place), Inter or similar for body if needed.

**`font-bold tracking-tight` on every heading, sizes `text-4xl md:text-6xl`.** The gentle ramp and uniform weight remove hierarchy. Swap: a real scale with large jumps (one enormous size, one body size, one small label size), weights that vary (a light 120px headline next to a bold 14px label), and tracking adjusted per size, not globally.

**Everything centered.** Centered type is for short, symmetric content. A page where every headline, paragraph and button is centered has given up on layout. Swap: left-align by default; center one thing on purpose.

**Eyebrow → H2 → centered paragraph on every section.** The "small uppercase accent-colored label, big title, one explanatory sentence" stack is the single most recognizable section header on the web. Swap: let sections open differently; some need no heading at all, some are just a headline, some lead with the content.

**Lowercase-everything or Title Case Everything.** Both are stylistic decisions that should come from the brand voice, not a default.

**No measure control.** Body paragraphs running the full container width. Swap: `max-w-prose` or ~60–75 characters per line.

## 3. Hero

The generated hero, in order: badge pill (`✨ Now in public beta`, `New`, rounded-full, tiny) → H1 with a gradient span on the last two words → one-sentence subhead in gray → two buttons (solid primary + ghost "Learn more" with arrow) → product mockup in a rounded frame with a glow, or an abstract illustration. All centered.

Each piece is a tell:

- **The badge pill.** Swap: delete unless there is real news; if there is, say it as a line of text.
- **Gradient span.** See Color.
- **"Primary + Learn more" pair.** Nobody clicks "Learn more". Swap: one action, named for what happens ("See the menu", "Book a slot", "Try it on a sample invoice"). A second link, if needed, goes somewhere specific.
- **Mockup in a glowing rounded frame.** Swap: the real interface, large, cropped with intent, or no image at all and a headline that does the work.
- **Centered stack.** Swap: left-aligned headline with the image to the right or below; or a full-bleed image with type over it; or a headline so large it is the hero.

The headline itself is a copy problem; see `copy.md`.

## 4. Sections and layout

**The template order.** Hero → logo row → three features → bento grid → how it works (three numbered steps) → testimonials → pricing → FAQ accordion → CTA band → four-column footer. Having some of these is fine. Having them in this order, each one a centered `max-w-7xl` block with `py-24`, is the template. Swap: decide what this page needs to say, in what order, then design each section as its own thing.

**Uniform container and spacing.** Every section `max-w-7xl mx-auto px-6 py-24`. Swap: vary width (one section full-bleed, one at `max-w-3xl`), vary vertical rhythm, let one section be dense and one spacious.

**Everything in a grid of equal cards.** `grid md:grid-cols-3 gap-8` with identical cards. Swap: a list with hairline dividers; a two-column with one large item and several small; a table; a single column of generous rows. Cards only when the items are objects.

**The bento grid.** Was the fresh alternative to three cards in 2023; is now the second most common layout on the web. Use only if the content has genuinely different-sized pieces.

**Logo row of fake or generic logos** ("Trusted by" + grayscale wordmarks). If the logos are real and recognizable, fine. If they are placeholders or unknown names, this section reduces trust. Swap: delete, or name real clients in a sentence.

**Stats row with round numbers** (`10k+ users · 99.9% uptime · 24/7 support · 50+ countries`). Round, unsourced numbers read as invented. Swap: real figures with their specificity intact ("1,284 invoices sent last month"), or none.

**Three numbered steps with icons.** Swap: show the real thing happening (screenshots, a short sequence of the real UI) or write it as a paragraph.

**FAQ accordion with five generic questions.** Fine if the questions are real customer questions. A tell when they are "Is there a free trial?", "Can I cancel anytime?", "Is my data secure?".

**Gradient CTA band before the footer** ("Ready to get started?" on a purple block). Swap: a plain, specific closing line and the one action; or just the footer.

**Four-column footer with Product / Company / Resources / Legal.** The default for a company with 40 pages. A small business or template needs one row. Swap: footer sized to the actual site.

## 5. Components

**Tinted icon square + title + two-line blurb** feature card. Swap: drop the icon, make the title do the work, or replace the icon with something real (a screenshot crop, a number, a photograph).

**Lucide/Heroicons on every row.** Icons add meaning only when they distinguish items. Sparkles, Zap, Shield, Rocket and Globe distinguish nothing. Swap: none, or one custom set used sparingly.

**Emoji as icons or in headings.** Never. Swap: words.

**`rounded-2xl shadow-lg` / `shadow-xl` on everything.** Soft boxes stacked on soft boxes. Swap: `border` hairlines, or no container; shadows reserved for things that float (menus, modals).

**Glassmorphism** (`bg-white/10 backdrop-blur border border-white/20`). Swap: solid surfaces.

**Avatar circle + name + five stars + quote** testimonial cards, especially three in a row. Swap: one real quote, set large, with a real name and a specific detail; or none.

**Three pricing tiers, middle one "Most popular" and scaled up.** The tell is the unmotivated emphasis. Swap: emphasize nothing, or emphasize the plan the business actually wants to sell and say why.

**Checkmark lists (`✓`) of features.** Swap: sentences or a plain list; checkmarks only when comparing plans.

**Pill buttons with trailing arrow (`→` / `ArrowRight`).** The arrow signals "generated" now. Swap: a button that is a rectangle or a text link; the label carries the meaning.

**Hover `scale-105` / `-translate-y-1` with `transition-all`.** Swap: color or underline change, 150ms, `transition-colors`.

**Dot grid / grid line / noise background overlays.** Decorative defaults. Swap: remove unless it comes from the material (a graph-paper brand, a print brand).

**Floating product cards at angles with glow.** Swap: the product, flat, large, honest.

## 6. Motion

**Fade-up on scroll on every element with stagger** (`framer-motion` `initial={{opacity:0,y:20}}` on everything). Reads as a template because it is applied uniformly. Swap: no entrance animation by default; one or two intentional reveals where the content earns it.

**Animated gradient borders, shimmer buttons, typing-effect headlines, counting-up numbers.** Attention tricks that signal nothing about the brand. Swap: remove.

**Infinite marquee of logos or words.** Second-order slop; see §9.

**Smooth-scroll libraries (Lenis) and custom cursors by default.** Fine on a portfolio with a reason. A tell on a business site.

## 7. Imagery

**Abstract 3D blobs, glass shapes, gradient spheres, "AI-generated abstract tech illustration".** Swap: the product, the place, the people, the material, a document, a diagram, or type alone.

**Stock: laptop on desk, diverse team pointing at a monitor, handshake.** Swap: as above.

**Mockups in device frames with reflections.** Swap: a flat crop of the real screen.

**Placeholder gray boxes shipped as final.** Swap: an honest `{{TODO}}` note to the user, not a gray box styled to look intentional.

## 8. Dark mode

**Dark by default for a non-technical brand.** `bg-neutral-950 text-white` with a neon accent is the devtools look. A bakery, a clinic, a school or a fashion label almost never wants it. Swap: a light paper surface, or a dark that comes from the brand (a deep green, a warm charcoal), not `#0a0a0a`.

**Dark mode toggle on a marketing site.** Marketing pages pick one mode.

## 9. Second-order slop (the anti-template that became a template)

The reaction to gradient slop has its own recognizable kit. Each of these is a good tool when it comes from the brand and a tell when it is used as a signal of taste:

- Giant serif display (Instrument Serif, Editorial New, Playfair) on everything, often italic for one word
- Grain / noise overlay on the whole page
- `(01)`, `(02)` numbered section labels; `[ ]` brackets around labels
- Uppercase mono labels everywhere (`text-xs font-mono uppercase tracking-widest`)
- Infinite marquee rows
- Cursor-follow blobs or custom cursors
- Huge footer wordmark cut off at the bottom
- `© 2026 — All rights reserved` in mono, with an em dash
- "Scroll ↓" indicators
- Text-reveal-by-word on scroll
- Split-flap / hover-scramble text

The test is the same: swap test. If the client is a Swiss type foundry, mono labels are correct. If the client is a car dealership, they are a costume.

## 10. Tailwind swap table

| Generated | Designed |
|---|---|
| `bg-gradient-to-r from-purple-600 to-pink-600` | `bg-[var(--brand)]`, one color from the material |
| `bg-clip-text text-transparent bg-gradient-to-r …` | `text-[var(--ink)]` |
| `absolute … blur-3xl bg-indigo-500/30` | delete |
| `rounded-2xl shadow-lg p-8` card | `border-t border-neutral-300 py-8` row, or no wrapper |
| `bg-white/10 backdrop-blur-md border-white/20` | `bg-white` / `bg-[var(--paper)]` |
| `text-4xl md:text-6xl font-bold tracking-tight` on every H | one `text-[clamp(3rem,9vw,9rem)] leading-[0.95]` display, modest everything else |
| `text-gray-600` body everywhere | a tinted neutral from the config, `max-w-prose` |
| `text-xs font-semibold uppercase tracking-wider text-indigo-600` eyebrow | delete, or a plain small label in ink |
| `rounded-full px-6 py-3` + `<ArrowRight/>` | `px-5 py-3` rectangular, label only |
| `hover:scale-105 transition-all` | `hover:underline` / `hover:bg-… transition-colors duration-150` |
| `grid md:grid-cols-3 gap-8` equal cards | `divide-y`, or `grid-cols-[2fr_1fr]`, or a table |
| `max-w-7xl mx-auto px-6 py-24` on every section | varied: `max-w-3xl`, full-bleed, `py-12` / `py-40` |
| `bg-neutral-950 text-white` default | `bg-[var(--paper)] text-[var(--ink)]` unless the brand is dark |
| `<motion.div initial={{opacity:0,y:20}} …>` on everything | none, or one reveal with a reason |
| `✨` `🚀` `⚡` anywhere | words |
| `<Sparkles/>` `<Zap/>` `<Shield/>` `<Rocket/>` | none |
| `bg-[radial-gradient(...)]` dot/grid pattern | delete |

## 11. Quick scan checklist

Scan the page or code for these in under a minute; each hit is a line in the audit:

- gradient (any unmotivated), gradient text, blur orbs
- badge pill in hero; two-button hero; centered hero stack
- Inter-only; uniform bold tracking-tight headings; everything centered; eyebrow-H2-paragraph stacks
- `max-w-7xl` + `py-24` repeated; equal-card grids; bento
- icon squares; lucide on every row; emoji
- rounded-2xl + shadow everywhere; glass
- fake logos; round stats; generic testimonials; "Most popular"; generic FAQ; gradient CTA band; oversized footer
- fade-up stagger on everything; shimmer; marquee; counters
- abstract blobs / stock / glowing mockups
- dark-by-default on a non-tech brand
- second-order kit: giant serif, grain, (01), mono labels, cursor effects
- copy: see `copy.md`
