import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const queries = {
  categories: gql`
    query Categories {
      categories(where: { draft: false }, first: 99) {
        name
        slug
        emoji {
          url
        }
        image {
          url
          handle
        }
        ogImage {
          url
          handle
        }
      }
    }
  `,
  banks: gql`
    query Banks {
      banks(where: { draft: false }, first: 99) {
        name
        slug
        description
        logo {
          url
          handle
        }
        ogImage {
          url
          handle
        }
        shortLogo {
          url
          handle
        }
      }
    }
  `,
  featuredCards: gql`
    query FeaturedCards {
      cards(where: { featured: true, draft: false }, first: 12) {
        name
        slug
        applyUrl
        rating
        image {
          url
          handle
        }
      }
    }
  `,
  cards: gql`
    query Cards {
      cards(where: { draft: false }, first: 9999) {
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
          handle
        }
        ogImage {
          url
          handle
        }
      }
    }
  `,
  banksWithCards: gql`
    query BanksWithCards {
      banks(first: 999) {
        name
        description
        slug
        ogImage {
          url
          handle
        }
        logo {
          url
          handle
        }
        cards(first: 999) {
          ... on Card {
            name
            slug
            image {
              url
              handle
            }
            applyUrl
            rating
          }
        }
      }
    }
  `,
  categoriesWithCards: gql`
    query CategoriesWithCards {
      categories(first: 99) {
        name
        slug
        image {
          url
          handle
        }
        card_category(first: 999) {
          ... on Card {
            name
            slug
          }
        }
      }
    }
  `,
};

const hygraph = async (query, queryParam) => {
  const res = await request(url, queries[query]);
  const data = await res[queryParam || query];
  return data;
};

export default hygraph;
