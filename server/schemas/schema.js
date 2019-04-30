const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Users {
name: String!
}

type Query {
getAllUsers: [Users!]!
}

type Mutation {
createUser(name: String!): Users!
}`

module.exports = typeDefs