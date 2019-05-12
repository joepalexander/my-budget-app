const { gql } = require("apollo-server-express");

module.exports = `
  scalar Date
  type user {
    id: ID
    firstName: String
    lastName: String
    createdAt: Date
    updatedAt: Date
    email: String
    hashedPass: String
    salt: String
  },

  type category {
    id: ID
    name: String
    description: String
  }
`;