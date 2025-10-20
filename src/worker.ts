export default {
  async fetch(request: Request, env: any) {
    // Try to serve the static file from /dist first
    const res = await env.ASSETS.fetch(request);

    // If not found (404), fall back to index.html (SPA routing)
    if (res.status === 404) {
      const url = new URL(request.url);
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }
    return res;
  }
};
