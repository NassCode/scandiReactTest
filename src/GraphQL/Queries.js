import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    categories{
      name
      products {
      name
      inStock
      }
    }
  }
`;