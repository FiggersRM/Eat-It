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
      user {
        _id
      }
    }
  }
`;

export const DELETE_RESTAURANT = gql`
mutation deleteRestaurant($restaurantId: ID!) {
  deleteRestaurant(restaurantId: $restaurantId) {
    name
    address
    user {
      _id
    }
  }
}
`

export const ADD_MENU = gql`
  mutation addMenu($restaurantId: ID!, $name: String!, $price: Int!, $description: String!) {
    addMenu(restaurantId: $restaurantId, name: $name, price: $price, description: $description) {
        menu {
            name
            price
            description
            _id
        }
    }
  }
`;

export const DELETE_MENU = gql`
mutation deleteMenu($restaurantId: ID!, $menuId: ID!) {
  deleteMenu(restaurantId: $restaurantId, menuId: $menuId) {
    name
  }
}
`
