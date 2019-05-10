const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Query {
    users: [user]
    home: user
  }
`;