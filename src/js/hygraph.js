import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const queries = {
  banks: gql`
    query Banks {
      banks(where: { draft: false }, first: 30) {
        name
        slug
        logo {
          url
        }
        ogImage {
          url
        }
      }
    }
  `,
  featuredCards: gql`
    query FeaturedCards {
      cards(where: { featured: true, draft: false }, first: 6) {
        name
        slug
        applyUrl
        rating
        image {
          url
        }
      }
    }
  `,
  cards: gql`
    query Cards {
      cards(where: { draft: false }) {
        name
        slug
        applyUrl
        rating
        description
        content {
          html
        }
        image {
          url
        }
        ogImage {
          url
        }
        bank {
          ... on Bank {
            name
          }
        }
      }
    }
  `,
};

const hygraph = async (query) => {
  const res = await request(url, queries[query]);
  const data = await res[query];
  return data;
};

export default hygraph;
