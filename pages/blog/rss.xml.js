import { request } from "@/utils/datocms";
import { SITEMAP_QUERY } from "@/helpers/datocms";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: "http://localhost:5000",
    production: "https://axiearmy.club",
  }[process.env.NODE_ENV];

  const data = await request({
    query: SITEMAP_QUERY,
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>Axie Army | Academy</title>
        <link>https://axiearmy.club/</link>
        <atom:link href="https://axiearmy.club/blog/rss.xml" rel="self" type="application/rss+xml" />
        <description>Invertimos en videojuegos blockchain. Damos becas a jugadores que quieren hacer realidad sus sueños. Porque jugar es un estilo de vida. #GamingIsALifeStyle</description>
        <copyright>${new Date().getFullYear()} Refsnes Data as. Todos los derechos reservados.</copyright>
        ${data.allPosts
          .map((post) => {
            let category = "";
            post.tags.length &&
              post.tags.map(
                (tag) => (category += `<category>${tag.name}</category>`)
              );

            return `
              <item>
                <title>${post.title}</title>
                <link>${baseUrl}/blog/${post.slug}</link>
                <guid>${baseUrl}/blog/${post.slug}</guid>
                <description>${post.excerpt}</description>
                ${category}
              </item>
            `;
          })
          .join("")}
    </channel>
    </rss>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
