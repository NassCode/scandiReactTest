import { gql } from "@apollo/client";

export const CATEGORIES = gql`
query {
  categories{
    name
    products {
      id
      name
      prices {
        amount
        currency {
          label
          symbol
        }
        
      }
      inStock
      gallery
      attributes {
        name
        items {
          displayValue
          value
        }
      }
    }
  }
}
`;