import { request } from "@/utils/datocms";
import { ALLPAGES_QUERY, POSTPAGE_QUERY } from "@/helpers/datocms";

export async function getStaticPaths() {
  const data = await request({
    query: ALLPAGES_QUERY,
  });

  const paths = data.allPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await request({
    query: POSTPAGE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: { data },
  };
}

export default function Post({ data }) {
  return (
    <article>
      <h1>{data.post.title}</h1>
      <p>{data.post.content}</p>
      <p>
        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
      </p>
    </article>
  );
}
