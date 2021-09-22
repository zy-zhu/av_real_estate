import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!){
    categories(where: {slug: $slug}) {
      name
      introduction
      articles {
        slug
        title
        content
        image {
          url
        }
        category {
          slug
          name
          introduction
        }
      
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;