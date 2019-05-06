const { gql } = require("apollo-server-express");

module.exports = `
scalar Date
type User {
  id: ID
  name: String
  createdAt: Date
  updatedAt: Date
}
`;