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
