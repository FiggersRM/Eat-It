import { gql } from "@apollo/client";

export const QUERY_RESTAURANTS = gql`
  query restaurants {
    restuarant {
      _id
      name
      address
      menu
      user
    }
  }
`;
