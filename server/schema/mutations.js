const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Mutation {
    login(email: String!, password: String!): loginResponse
    register(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
    invalidateTokens: Boolean!
  }
`;