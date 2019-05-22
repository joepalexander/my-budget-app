const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Query {
    Budget: [Budget]
    Expenses: [Expense]
  }
`;