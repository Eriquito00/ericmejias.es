# Project Domains Implementation Plan

> **For agentic workers:** Implement the tasks in order, using the existing project conventions and checking each result before continuing.

**Goal:** Serve PianoMan and Primero under the portfolio's official domain and make their discoverable URLs consistent with the site's SEO.

**Architecture:** Vercel routes each project prefix to its existing deployment. Project-relative resources require a trailing slash. Primero additionally uses a WebSocket on the current host, so its connection must be verified and, if necessary, changed in its own project rather than assumed to work.

**Tech Stack:** Vercel routing, React, TypeScript, static SEO files.

**Spec:** The agreed conversation: use `https://ericmejias.es` without `www`, fix PianoMan, expose Primero if functional, and update SEO and sitemap.

## Global Constraints

- Preserve the portfolio and both existing projects; do not add dependencies.
- Do not claim a project works or list a broken URL in the sitemap.
- Domain configuration and external project deployments may require separate access.
- Follow the existing three-language conventions for any changed visible text.

## Review Focus

- Both project URLs without a trailing slash must resolve to the directory URL.
- Styles, scripts, imports and audio must load from the correct project prefix.
- Primero room creation and joining must reach the Render WebSocket backend.
- Canonical URLs and sitemap entries must agree with actual domain redirects.
- The portfolio root and its assets must not be intercepted by project routing.

### Task 1: Fix and verify project routing

**Files:** Modify `vercel.json`; inspect external project repositories only as needed.

- [ ] Reproduce the incorrect PianoMan asset routes and Primero WebSocket host selection.
- [ ] Configure PianoMan directory redirect and prefix rewrite to its actual Vercel deployment.
- [ ] Configure Primero prefix routing only when its WebSocket can be made functional; preserve the existing project link until verified.
- [ ] Verify root, assets, audio, and Primero room connectivity against a deployed preview when available; report access limitations.

### Task 2: Align SEO and internal links

**Files:** Modify `index.html`, `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, and verified project links in `src/components/Projects/projectsData.ts` as appropriate.

- [ ] Update the canonical homepage and discovery files to the official non-www domain; remove invalid alternate-language sitemap entries that all use the same URL.
- [ ] Add only verified functional project URLs to the sitemap and project links; ensure project-specific metadata is addressed at its source when accessible.
- [ ] Confirm the apex domain is the actual primary Vercel domain or explicitly report the outstanding dashboard change.

### Task 3: Verify

- [ ] Run `npm run lint`, `npm run typecheck`, and `npm run build`; identify pre-existing failures accurately.
- [ ] Check the sitemap XML and routing configuration, and exercise available live or preview URLs.
- [ ] Report unverified deployment, indexing, domain settings, and Primero multiplayer behavior without implying they passed.
