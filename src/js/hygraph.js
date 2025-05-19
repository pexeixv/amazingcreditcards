import { request, gql } from "graphql-request";

const endpoint = import.meta.env.CONTENT_API;

const transform = `
  transformation: {
    image: {
      resize: { width: 800 }, 
      quality: { value: 70 }
    }, 
    document: { 
      output: { format: webp } 
    }
  }
`;

const queries = {
  categories: gql`
    query Categories {
      categories(where: { draft: false }, first: 9999) {
        name
        pageTitle
        slug
        emoji {
          url (${transform})
        }
        image {
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
        }
        shortLogo {
          url (${transform})
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
          url (${transform})
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
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        ogImage {
          url (${transform})
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
          url (${transform})
        }
        logo {
          url (${transform})
        }
        cards(where: { draft: false }, first: 9999) {
          ... on Card {
            name
            slug
            description {
              html
            }
            image {
              url (${transform})
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
          url (${transform})
        }
        bannerImage {
          url (${transform})
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
              url (${transform})
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
          url (${transform})
        }
        draft
        ogImage {
          url (${transform})
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
              url (${transform})
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
    const res = await request(endpoint, queries[query]);
    return res[queryParam || query] || [];
  } catch (error) {
    console.error("Error fetching data from Hygraph:", error);
    return [];
  }
};

export default hygraph;
