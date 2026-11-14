# BCH Electric — brand website wireframes

Static **black-and-white HTML wireframes** for customer review. This is **not** the production site.

Designer: Mayank (BrandClef)

## Deploy (GitHub → Cloudflare Workers)

Zero build. `wrangler.toml` already points assets at the repo root.

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Workers** → **Connect to Git**
2. Select `mayanknagpal3107/bch-wireframes`, branch `main`
3. Confirm:
   - **Worker name:** `bch-wireframes`
   - **Deploy command:** `npx wrangler deploy` (or leave the dashboard default if it reads `wrangler.toml`)
   - No framework. No build output folder other than `.`
4. Save and deploy

Workers static assets: `[assets] directory = "./"` in `wrangler.toml`.

The repo root **is** the site: `styles.css`, `chrome.js`, `fonts/`, and the
`company/`, `products/`, `solutions/`, `support/`, `contact/`, `blogs/`, `legal/`
trees must all be on `main`. A partial push (HTML stubs only) makes
`/styles.css` and `/chrome.js` 404 on workers.dev while the homepage HTML still loads.


### Pages fallback

If you connect it as **Pages** instead: framework None, empty build command, output directory `/`.

Each push to `main` republishes. HTML is `no-cache` so reviewers see updates.

## Private review access (password gate)

The site is **not public**: `worker.js` enforces HTTP Basic Auth on every
request (`run_worker_first = true` in `wrangler.toml`, so static assets are
never served without the check). It **fails closed** — until the password is
configured, everyone gets a 401.

One-time setup after deploying:

1. Cloudflare Dashboard → **Workers & Pages** → `bch-wireframes` →
   **Settings** → **Variables and Secrets** → **Add** → type **Secret**,
   name `REVIEW_PASSWORD`, value = the password to share with reviewers.
   (Or from a terminal: `npx wrangler secret put REVIEW_PASSWORD`.)
2. Redeploy (or push to `main`) so the secret is picked up.
3. Reviewers open the site, type **any username** and the shared password.

To remove the gate later, delete `main = "worker.js"` and
`run_worker_first = true` from `wrangler.toml`.

## Local

```bash
python3 -m http.server 8766
```

Open http://localhost:8766/

## Fonts

- **Tosh A** (headings, h1–h3) — client-supplied TTFs bundled in `fonts/ToshA-*.ttf` via `@font-face`.
- **Noto Sans** (subheadings, h4–h6 and section labels) — loaded from Google Fonts via `@import` in `styles.css`.
- **Noto Sans Devanagari** (Hindi) — bundled, `fonts/NotoSansDevanagari-*`.
