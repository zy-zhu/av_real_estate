import gql from "graphql-tag";

const SUBCATEGORIES_QUERY = gql`
  query SubCategories {
    subcategories {
      name
    }
  }
`;

export default SUBCATEGORIES_QUERY;