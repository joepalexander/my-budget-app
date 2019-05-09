const { gql } = require("apollo-server-express");

module.exports = `
  scalar Date
  type user {
    id: ID
    first_name: String
    last_name: String
    created_at: Date
    updated_at: Date
    email: String
    password: String
  }
`;