export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Block AI training crawlers from scraping contact/form endpoints
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://www.cpnexs.in/sitemap.xml",
    host: "https://www.cpnexs.in",
  };
}
