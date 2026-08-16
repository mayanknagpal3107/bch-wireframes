# BCH Electric — brand website wireframes

Static **black-and-white HTML wireframes** for customer review. This is **not** the production site.

Designer: Mayank (BrandClef)

## Deploy (GitHub → Cloudflare Pages)

Zero build. Push this folder to GitHub, then:

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select the repo
3. Set:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (repo root — `index.html` lives here)
4. Save and deploy

Each push to the connected branch republishes. HTML is sent with `no-cache` so reviewers see updates.

## Local

```bash
python3 -m http.server 8766
```

Open http://localhost:8766/

## Fonts

Hindi (Devanagari) is **bundled** — `fonts/NotoSansDevanagari-*` via `@font-face` in `styles.css`. No Google Fonts CDN.

Google Maps iframes on Contact / Sales offices are embeds only; they are not deploy assets.
