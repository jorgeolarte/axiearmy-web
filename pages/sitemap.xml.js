import fs from "fs";
import { getTrainers } from "@/lib/trainers";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://axiearmy.club",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: "pages",
        production: "./",
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "api",
        "trainer",
        ".next",
        "___next_launcher.js",
        "___vc_bridge.js",
        "node_modules",
        "package.json",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const trainers = await getTrainers();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${trainers
        .map(({ ronin }) => {
          return `
              <url>
                <loc>${baseUrl}/trainer/${ronin}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
