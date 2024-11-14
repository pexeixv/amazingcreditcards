import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const queries = {
  categories: gql`
    query Categories {
      categories(where: { draft: false }, first: 9999) {
        name
        pageTitle
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
        pageTitle
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
        summary {
          html
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
  featuredCategories: gql`
    query FeaturedCategories {
      categories(first: 6) {
        name
        slug
        emoji {
          url
        }
      }
    }
  `,
  cards1: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, skip: 0) {
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
      cards(where: { draft: false }, first: 100, skip: 100) {
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
      cards(where: { draft: false }, first: 100, skip: 200) {
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
      cards(where: { draft: false }, first: 100, skip: 300) {
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
      cards(where: { draft: false }, first: 100) {
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
      banks(where: { draft: false }, first: 9999) {
        name
        slug
        pageTitle
        ogImage {
          url
          handle
        }
        logo {
          url
          handle
        }
        cards(where: { draft: false }, first: 9999) {
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
      categories(where: { draft: false }, first: 9999) {
        name
        slug
        pageTitle
        image {
          url
          handle
        }
        bannerImage {
          url
          handle
        }
        content1 {
          html
        }
        content2 {
          html
        }

        card_category(first: 9999) {
          ... on Card {
            name
            rating
            description {
              html
            }
            slug
            applyUrl
            image {
              url
              handle
            }
          }
        }
      }
    }
  `,
  blogs: gql`
    query Blogs {
      blogs(where: { draft: false }, first: 9999) {
        title
        slug
        excerpt
        image {
          url
        }
        draft
        ogImage {
          url
          handle
        }
        content(first: 999) {
          ... on BlogContent {
            textContent {
              html
            }
          }
          ... on HyperlinkedImage {
            url
            image {
              url
            }
            description
          }
        }
      }
    }
  `,
};

const hygraph = async (query, queryParam) => {
  try {
    const res = await request(url, queries[query]);
    return res[queryParam || query] || [];
  } catch (error) {
    console.error("Error fetching data from Hygraph:", error);
    return [];
  }
};
export default hygraph;
