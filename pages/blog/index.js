import { request } from "@/utils/datocms";
import Link from "next/link";
import { HOMEPAGE_QUERY } from "@/helpers/datocms";

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { data },
  };
}

export default function Blog({ data }) {
  //   console.log(JSON.stringify(posts, null, 2));
  return (
    <div className='flex flex-col justify-between items-center gap-10'>
      {data.allPosts.map((post) => (
        <article key={post.id}>
          <Link href={`/blog/${post.slug}`} passHref>
            <div className='bg-gray'>
              <a>{post.title}</a>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
