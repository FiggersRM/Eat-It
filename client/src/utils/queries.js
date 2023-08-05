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

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      address
      role
    }
  }
`;
