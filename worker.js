/**
 * Private-review gate for the BCH wireframes.
 *
 * Every request must carry HTTP Basic Auth whose password matches the
 * REVIEW_PASSWORD secret (set in Cloudflare: Workers → bch-wireframes →
 * Settings → Variables and Secrets, type "Secret"; or
 * `npx wrangler secret put REVIEW_PASSWORD`). The username is ignored, so
 * reviewers only need the shared password.
 *
 * Fails closed: if the secret is not configured, nothing is served.
 */

function timingSafeEqual(a, b) {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  if (ab.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ab.length; i++) diff |= ab[i] ^ bb[i];
  return diff === 0;
}

function unauthorized(message) {
  return new Response(
    "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>Private review</title></head>" +
      "<body style=\"font-family:system-ui,sans-serif;background:#111;color:#eee;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0\">" +
      "<div style=\"max-width:28rem;padding:2rem;border:1px solid #333;background:#1a1a1a\">" +
      "<h1 style=\"font-size:1.2rem;margin:0 0 .5rem\">BCH wireframes — private review</h1>" +
      "<p style=\"color:#bbb;font-size:.9rem\">" + message + "</p>" +
      "</div></body></html>",
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="BCH wireframes review", charset="UTF-8"',
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    }
  );
}

export default {
  async fetch(request, env) {
    const secret = env.REVIEW_PASSWORD;
    if (!secret) {
      // Fail closed: no password configured means nobody gets in.
      return unauthorized(
        "Access is not configured yet. The site owner must set the REVIEW_PASSWORD secret on this Worker."
      );
    }

    const auth = request.headers.get("Authorization") || "";
    if (auth.startsWith("Basic ")) {
      let decoded = "";
      try {
        decoded = atob(auth.slice(6));
      } catch (e) {
        return unauthorized("Enter the review password to continue.");
      }
      // "username:password" — username is ignored.
      const password = decoded.slice(decoded.indexOf(":") + 1);
      if (timingSafeEqual(password, secret)) {
        return env.ASSETS.fetch(request);
      }
    }
    return unauthorized("Enter the review password to continue. Any username works.");
  },
};
