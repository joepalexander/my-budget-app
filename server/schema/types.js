const { gql } = require("apollo-server-express");

module.exports = `
type User {
  id: ID
  name: String
  }
`;