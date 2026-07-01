export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.cpnexs.com/sitemap.xml",
    host: "https://www.cpnexs.com",
  };
}
