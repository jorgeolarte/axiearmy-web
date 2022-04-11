export const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
    allPosts(first: $limit) {
      id
      title
      slug
      excerpt
    }
}`;

export const ALLPAGES_QUERY = `query AllPages {
    allPosts {
      slug
    }
}`;

export const SITEMAP_QUERY = `query Sitemap {
  allPosts(orderBy: createdAt_DESC) {
    title
    slug
    excerpt
    picHeader {
      filename
    }
    tags {
      name
    }
    createdAt
    author {
      name
    }
  }
}`;

export const POSTPAGE_QUERY = `query PostPage($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      id
      title
      slug
      content
      author {
        id
        name
        pic
      }
    }
}`;
