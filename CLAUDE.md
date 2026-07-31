# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cindy's personal site (`cindyc-dev.github.io`): a statically-generated Astro site showcasing projects, a blog, and university course notes/tutorials. Built with Astro, Markdoc (for content authoring), React (for a couple of interactive islands), and Tailwind CSS. Deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

## Commands

```bash
npm run dev       # start local dev server on http://localhost:3000
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run clean     # rm -rf dist
npx astro check   # type-check .astro files (not wired to a package.json script)
```

There is no test suite and no lint script configured in this repo. `prettier-plugin-astro` is a devDependency but there is no committed Prettier config — formatting is not enforced by tooling.

To verify a content or component change, run `npm run dev` and visit the relevant route, or run `npm run build` to catch Markdoc validation / frontmatter schema errors (these throw at build time, not just at runtime).

## PR conventions

PRs follow the template at `.github/pull_request_template.md` (Summary / Screenshots / Test plan). Any PR that changes UI (layout, styling, new/updated components, content rendering) must include before/after screenshots in the Screenshots section — delete that section for non-visual changes (content copy edits, config, docs, refactors).

## Architecture

### Content lives outside `src/`, in `content/`

Site content is authored as Markdoc (`.md` with Markdoc syntax) files in the top-level `content/` directory, organized by section:

- `content/blog/` — blog posts
- `content/notes/` — general notes
- `content/projects/` — project showcase entries
- `content/comp10001/`, `content/musi20174/` — per-course tutorial/logbook content
- `content/typescript/` — misc notes

This is deliberately separate from `src/pages/` (Astro's routing directory) because content here is read manually via `src/lib/markdoc/read.ts`, not through Astro's built-in content collections.

### The read → validate → parse → render pipeline

For every content section, the flow is the same (`src/lib/markdoc/read.ts`):

1. `readAll({ directory, frontmatterSchema })` globs `content/<directory>/*.md`, or `readOne({ directory, slug, frontmatterSchema })` reads a single file.
2. Frontmatter is parsed with `gray-matter`, then validated against a Zod schema from `src/lib/markdoc/frontmatter.schema.ts` (`blog` or `project`). Invalid frontmatter throws a build error naming the offending file.
3. Markdown body is parsed/validated/transformed by Markdoc using the config in `src/lib/markdoc/markdoc.config.ts`, which registers custom tags (`youtube`, `tweet`, `codepen`, `codesandbox`, `githubgist`, `pycode`, `toast`, `mermaid`, `audio`, plus inline tags like `details`/`sup`/`sub`/`abbr`/`kbd`/`mark`) and customizes rendering of headings and fenced code blocks.
4. The transformed content tree is rendered in `.astro` pages via `<Renderer content={content} />` (`src/components/Markdoc/Renderer.astro`), which maps each Markdoc tag name to an Astro component (e.g. `youtube` → `YouTubeEmbed.astro`).

**To add a new custom Markdoc tag**: register it in `markdoc.config.ts` under `tags` (or `nodes` for default markdown elements), create a matching `.astro` component in `src/components/Markdoc/`, and wire it into the `components` map in `Renderer.astro`.

### Two frontmatter schemas cover all content

- `blog` (used by blog, notes, comp10001, and musi20174 sections): a discriminated union on `external` — either a local Markdoc post (`external: false`, with optional `ogImagePath`/`canonicalUrl`) or a link out to an external post (`external: true`, requires `url`). Both variants share `draft`, `featured`, `title`, `date` (bare `yyyy-mm-dd`, unquoted), and `description`.
- `project` (used by projects): adds `url`, `tags`, `github`, `images`, `otherTags` on top of the base fields.

Posts/entries with `draft: true` are filtered out of listing pages and excluded from `getStaticPaths`, so they don't get a generated route.

### Adding a new content section (e.g. a new course or note collection)

Each section (blog, notes, comp10001, musi20174) follows an identical, copy-pasted pattern rather than a shared abstraction:

- `src/pages/<section>.astro` — listing page, calls `readAll({ directory: "<section>", frontmatterSchema: blog })`, filters drafts, sorts by date, renders external links with an external-link icon and internal links to `/<section>/<slug>`.
- `src/pages/<section>/[slug].astro` — detail page, calls `getStaticPaths()` (built from `readAll`, filtered to non-draft/non-external) plus `readOne` for the actual page, and renders via `ContentLayout` + `Renderer`.

To add a new section, copy an existing pair (e.g. `notes.astro` / `notes/[slug].astro`), swap the `directory` string, and add matching Markdoc files under `content/<new-section>/`.

### Layouts

- `PageLayout.astro` — used by static/listing pages (`index`, `blog`, `projects`, `notes`, etc.). Exposes `meta` and `main` slots.
- `ContentLayout.astro` — used by individual content detail pages (`blog/[slug]`, `notes/[slug]`, etc.). Takes `title`/`date`/`description` props, renders the post header, and exposes `meta` and `content` slots.

Both import `global.css` and wire up `GoogleFont`, `FontAwesome`, `ThemeScript`, and `Favicon`, and wrap content in the shared `Header`/`Footer`.

### Site-wide constants

`src/config.ts` holds `SITE_TITLE`, `SITE_DESCRIPTION`, `MY_NAME`, `GITHUB_USERNAME`, `LINKEDIN_USERNAME`, and derives `SITE_URL` from the `site` value in `astro.config.mjs`. Prefer updating these over hardcoding site metadata in components.

### Theming

Dark/light mode uses Tailwind's `class` strategy (`ThemeScript.astro` toggles the class; `DarkModeToggle.astro` is the UI control). Colors are CSS custom properties (`--color-primary-blue`, `--color-text-*`, `--color-bg-*`, etc., defined in `src/styles/global.css`) consumed through Tailwind's `theme.colors` in `tailwind.config.cjs` — don't hardcode hex/rgb colors in components; use the `primary-*`, `text-*`, `bg-*`, `border-*` Tailwind classes. Prose/typography styling for rendered Markdoc content uses the `prose-bubblegum` typography variant defined in `tailwind.config.cjs`.

### Interactive/embedded content

A few Markdoc tags render non-trivial client-side functionality: `pycode` (`PythonCode.astro`) runs Python in-browser via `pyodide`/`client-side-python-runner` with a CodeMirror editor; `mermaid` (`Mermaid.astro`) renders diagrams with `mermaid` + `svg-pan-zoom`. These are heavier client bundles — only use them in content where actually needed.
