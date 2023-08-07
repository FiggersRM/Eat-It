const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    address: String
    role: String
}

type Restaurant {
    _id: ID
    name: String
    address: String
    menu: [Menu]
    user: User
}

type Menu {
    _id: ID
    name: String
    price: Int
    description: String
}

type Address {
    _id: ID
    address: String
    city: String
    zipcode: Int
}

type Auth {
    token: ID
    user: User
}

type Query {
    user(userId: ID!): User
    restaurant(restaurantId: ID!): Restaurant
    userRestaurant: [Restaurant]
    restaurants: [Restaurant]
    menu: Menu
    resMenu(restaurant: ID, name: String): [Menu]
    address: String
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
        address: String
        role: String
    ): Auth
    updateUser(
        username: String
        email: String
        password: String
        address: String!
        role: String!
    ): User
    addRestaurant(
        name: String!
        address: String!
        user: ID!
    ): Restaurant
    addMenu(
        restaurantID: ID!
        name: String!
        price: Int
        description: String
    ): Restaurant
    updateMenu(_id: ID!, price: Int!): Menu
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;