import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($name: String!, $address: String!, $user: ID!) {
    addRestaurant(name: $name, address: $address, user: $user) {
      name
      address
      user
    }
  }
`;

export const ADD_MENU = gql`
  mutation addMenu($name: String!, $price: Int!, $description: String!) {
    addMenu(name: $name, price: $price, description: $description) {
        menu {
            name
            price
            description
        }
    }
  }
`;
