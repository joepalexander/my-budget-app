const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Mutation {
    login(email: String!, password: String!): LoginResponse
    register(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
    invalidateTokens: Boolean!
  }
`;