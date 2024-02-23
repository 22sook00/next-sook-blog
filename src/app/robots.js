export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://next-sookdev.vercel.app/sitemap.xml",
  };
}
