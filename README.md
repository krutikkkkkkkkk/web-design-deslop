# web-design-deslop

[![skills.sh](https://skills.sh/b/krutikkkkkkkkk/web-design-deslop)](https://skills.sh/krutikkkkkkkkk/web-design-deslop)

A Claude skill that removes the "AI-generated" look from websites and web copy.

AI slop in web design is not one bad choice. It is the average of a million landing pages: the purple-to-pink gradient, the centered hero with a badge pill and two buttons, three equal feature cards with tinted icon squares, glass cards on near-black, copy that says "Unlock seamless workflows". Each piece is fine alone. Together they make a page that could belong to any company, which means it belongs to none.

The skill does three things:

1. **Audit** an existing page, mockup or codebase and report its slop tells, ranked, with a fix for each.
2. **Guide** a new build so the slop never gets written in the first place.
3. **Rewrite copy** that sounds generated.

It is written for Next.js + Tailwind first, but the ideas transfer to Framer, Figma and plain HTML.

## The one test

Replace the logo and product name with a competitor's. Does the page still work? If yes, it is slop, however polished. Everything else in the skill is a special case of this test.

## Install

**Claude Code**

```bash
git clone https://github.com/krutikkkkkkkkk/web-design-deslop.git ~/.claude/skills/web-design-deslop
```

Or copy the folder into your project's `.claude/skills/` for a project-scoped skill.

**Claude.ai / Cowork**

Download `web-design-deslop.skill` from the latest release and upload it in Settings, or zip the folder and upload that.

## Use

Just ask. The skill triggers when you build, review or redesign a site, or when you say a page looks generic, templated or "like an AI made it". Some things to try:

- "Review page.tsx and tell me what makes it look generic"
- "Build a one-page site for a coffee roaster in Vadodara. Don't make it look AI-made."
- "This landing copy reads like ChatGPT wrote it, rewrite it"

## What's inside

```
SKILL.md              the workflow: swap test, audit format, build order, copy rules
references/tells.md   catalog of visual, layout, motion and Tailwind tells, with the swap for each
references/copy.md    slop vocabulary and structures, the rewrite method, before/after examples
evals/                three test cases (audit, build, copy rewrite) runnable with `claude plugin eval`
```

## Run the evals

With Claude Code 2.1.269 or later, from the repo root:

```bash
claude plugin eval . --allow-tools Write,Edit,Bash --scaffold
```

This runs each case with and without the skill and writes a report under `evals/results/`.

## Made by

[Krutik Raut](https://infinitylinkage.com), Infinity Linkage. Other skills: [classical-collage-web-design](https://github.com/krutikkkkkkkkk), creative-branding, lasting-logo-design.

MIT licensed.
