const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Query {
    users: [Budget]
    budget: [Budget]
    expenses: [Expense]
  }
`;