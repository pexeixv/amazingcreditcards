import { request, gql } from "graphql-request";
const url = import.meta.env.CONTENT_API;

const transformations = {
  emoji: `(transformation: {
    image: { resize: { height: 40 }, quality: { value: 20 } },
    document: { output: { format: webp } }
  })`,
  logo: `(transformation: {
    image: { resize: { height: 50 }, quality: { value: 50 } },
    document: { output: { format: webp } }
  })`,
  shortLogo: `(transformation: {
    image: { resize: { height: 20 }, quality: { value: 20 } },
    document: { output: { format: webp } }
  })`,
  image: `(transformation: {
    image: { resize: { height: 120 }, quality: { value: 40 } },
    document: { output: { format: webp } }
  })`,
  ogImage: `(transformation: {
    image: { resize: { width: 200 }, quality: { value: 40 } },
    document: { output: { format: webp } }
  })`,
  bannerImage: `(transformation: {
    image: { resize: { width: 600 }, quality: { value: 60 } },
    document: { output: { format: webp } }
  })`,
  blogImage: `(transformation: {
    image: { resize: { width: 600 }, quality: { value: 60 } },
    document: { output: { format: webp } }
  })`,
  hyperlinkedImage: `(transformation: {
    image: { resize: { width: 600 }, quality: { value: 60 } },
    document: { output: { format: webp } }
  })`,
};

const queries = {
  categories: gql`
    query Categories {
      categories(where: { draft: false }, first: 9999, stage: PUBLISHED) {
        name
        pageTitle
        slug
        emoji {
          url ${transformations.emoji}
        }
        image {
          url ${transformations.image}
        }
        ogImage {
          url ${transformations.ogImage}
        }
      }
    }
  `,
  banks: gql`
    query Banks {
      banks(where: { draft: false }, first: 9999, stage: PUBLISHED) {
        name
        slug
        pageTitle
        description
        logo {
          url ${transformations.logo}
        }
        shortLogo {
          url ${transformations.shortLogo}
        }
        ogImage {
          url ${transformations.ogImage}
        }
        summary {
          html
        }
      }
    }
  `,
  featuredCards: gql`
    query FeaturedCards {
      cards(where: { featured: true, draft: false }, first: 12, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description {
          html
        }
        image {
          url ${transformations.image}
        }
      }
    }
  `,
  featuredCategories: gql`
    query FeaturedCategories {
      categories(first: 6, stage: PUBLISHED) {
        name
        slug
        emoji {
          url ${transformations.emoji}
        }
      }
    }
  `,
  cards1: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, skip: 0, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description { html }
        summary { html }
        content { html }
        image { url ${transformations.image} }
        ogImage { url ${transformations.ogImage} }
      }
    }
  `,
  cards2: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, skip: 100, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description { html }
        summary { html }
        content { html }
        image { url ${transformations.image} }
        ogImage { url ${transformations.ogImage} }
      }
    }
  `,
  cards3: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, skip: 200, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description { html }
        summary { html }
        content { html }
        image { url ${transformations.image} }
        ogImage { url ${transformations.ogImage} }
      }
    }
  `,
  cards4: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, skip: 300, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description { html }
        summary { html }
        content { html }
        image { url ${transformations.image} }
        ogImage { url ${transformations.ogImage} }
      }
    }
  `,
  cards: gql`
    query Cards {
      cards(where: { draft: false }, first: 100, stage: PUBLISHED) {
        name
        slug
        applyUrl
        rating
        description { html }
        summary { html }
        content { html }
        image { url ${transformations.image} }
        ogImage { url ${transformations.ogImage} }
      }
    }
  `,
  banksWithCards: gql`
    query BanksWithCards {
      banks(where: { draft: false }, first: 9999, stage: PUBLISHED) {
        name
        slug
        pageTitle
        logo { url ${transformations.logo} }
        ogImage { url ${transformations.ogImage} }
        cards(where: { draft: false }, first: 9999) {
          name
          slug
          description { html }
          image { url ${transformations.image} }
          applyUrl
          rating
        }
      }
    }
  `,
  categoriesWithCards: gql`
    query CategoriesWithCards {
      categories(where: { draft: false }, first: 9999, stage: PUBLISHED) {
        name
        slug
        pageTitle
        image { url ${transformations.image} }
        bannerImage { url ${transformations.bannerImage} }
        content1 { html }
        content2 { html }
        card_category(first: 9999) {
          ... on Card {
            name
            rating
            description { html }
            slug
            applyUrl
            image { url ${transformations.image} }
          }
        }
      }
    }
  `,
  blogs: gql`
    query Blogs {
      blogs(where: { draft: false }, first: 9999, orderBy: createdAt_DESC, stage: PUBLISHED) {
        title
        slug
        excerpt
        image { url ${transformations.blogImage} }
        draft
        ogImage { url ${transformations.ogImage} }
        content(first: 999) {
          ... on BlogContent {
            textContent { html }
          }
          ... on HyperlinkedImage {
            url
            image { url ${transformations.hyperlinkedImage} }
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
