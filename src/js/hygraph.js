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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
        }
        shortLogo {
          url
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
        }
        ogImage {
          url
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
        }
        logo {
          url
        }
        cards(first: 999) {
          ... on Card {
            name
            image {
              url
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
        }
        card_category(first: 999) {
          ... on Card {
            name
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
