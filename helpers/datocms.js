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
