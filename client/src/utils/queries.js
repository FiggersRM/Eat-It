import { gql } from "@apollo/client";

export const QUERY_RESTAURANTS = gql`
  query restaurants {
    restaurants {
      _id
      name
      address
      menu {
        name
        description
        price
      }
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_RESTAURANT = gql`
query restaurant($restaurantId: ID!) {
  restaurant(restaurantId: $restaurantId) {
    _id
    name
    menu {
      name
      description
      price
      _id
    }
    address
    user {
      _id
    }
  }
}
`;

export const QUERY_USER_RESTAURANT = gql`
  query userRestaurant($userId: ID!) {
    userRestaurant(userId: $userId) {
      _id
      name
      address
      user {
        _id
      }
    }
  }
`

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
