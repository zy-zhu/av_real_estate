import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      slug
      name
      introduction
    }
  }
`;

export default CATEGORIES_QUERY;