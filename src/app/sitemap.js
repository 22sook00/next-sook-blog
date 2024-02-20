const URL = "https://next-sookdev.vercel.app";

export default function sitemap() {
  const routes = ["", "/about"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
