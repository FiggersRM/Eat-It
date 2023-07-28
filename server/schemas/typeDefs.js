const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    //insert User keys here
}

type Restaurant {
    //insert Restaurant keys here
}

type MenuItem {
    name: String!
    price: Int!
    description: String!
}

type Address {
    //insert address keys here
}

type Query {
    user: User
    restaurant: Restaurant
    menuitem: MenuItem
    address: Address
}

type Mutations {
    // add mutations
}
`;

module.exports = typeDefs;