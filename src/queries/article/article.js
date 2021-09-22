import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug}) {
      slug
      title
      content
      description
      location
      year_propose
      year_implementation
      stakeholder
      external_link
     
      category {
        slug
        name
        introduction
      }
      image {
        url
      }
      diagrams{
        url
      }
      company_logo{
        url
      }
      impact_area{url}
      scale{url}
    
    }
  }
`;

export default ARTICLE_QUERY;
