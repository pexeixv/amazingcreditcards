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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
        }
        shortLogo {
          url
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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
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
        }
        ogImage {
          url
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
        }
        logo {
          url
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
        }
        bannerImage {
          url
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
            }
          }
        }
      }
    }
  `,
  blogs: gql`
    query Blogs {
      blogs(where: { draft: false }, first: 9999, orderBy: createdAt_DESC) {
        title
        slug
        excerpt
        image {
          url
        }
        draft
        ogImage {
          url
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
