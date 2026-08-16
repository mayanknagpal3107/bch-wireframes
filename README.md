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

## Local

```bash
python3 -m http.server 8766
```

Open http://localhost:8766/

## Fonts

Hindi (Devanagari) is **bundled** — `fonts/NotoSansDevanagari-*` via `@font-face` in `styles.css`. No Google Fonts CDN.
