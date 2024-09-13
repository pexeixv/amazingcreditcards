import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const queries = {
  categories: gql`
    query Categories {
      categories(where: { draft: false }, first: 9999) {
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
      banks(where: { draft: false }, first: 9999) {
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
        description {
          html
        }
        image {
          url
          handle
        }
      }
    }
  `,
  cards1: gql`
    query Cards {
      cards(first: 100, skip: 0) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        summary {
          html
        }
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
  cards2: gql`
    query Cards {
      cards(first: 100, skip: 100) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        summary {
          html
        }
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
  cards3: gql`
    query Cards {
      cards(first: 100, skip: 200) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        summary {
          html
        }
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
  cards4: gql`
    query Cards {
      cards(first: 100, skip: 300) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        summary {
          html
        }
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
  cards: gql`
    query Cards {
      cards(first: 100) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        summary {
          html
        }
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
      banks(first: 9999) {
        name
        slug
        ogImage {
          url
          handle
        }
        logo {
          url
          handle
        }
        cards(first: 9999) {
          ... on Card {
            name
            slug
            description {
              html
            }
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
      categories(first: 9999) {
        name
        slug
        image {
          url
          handle
        }
        card_category(first: 9999) {
          ... on Card {
            name
            description {
              html
            }
            slug
            image {
              url
              handle
            }
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
