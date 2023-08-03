const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    address: String
    role: String!
}

type Restaurant {
    _id: ID
    name: String
    address: Address
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
    restaurant: Restaurant
}

type Auth {
    token: ID
    user: User
}

type Query {
    user: User
    restaurant: Restaurant
    restaurants: [Restaurant]
    menu: Menu
    resMenu(resaurant: ID, name: String): [Menu]
    address: Address
}

type Mutation {
    addUser(
        username: String!
        email: String!
        password: String!
        address: String!
        role: String!
    ): Auth
    updateUser(
        username: String
        email: String
        password: String
        address: String!
        role: String!
    ): User
    updateMenu(_id: ID!, price: Int!): Menu
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;