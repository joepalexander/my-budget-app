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
    salt: String,
    count: Int
    budget: [budget]
  },

  type loginResponse {
    user: user
    accessToken: String
    refreshToken: String
  }

  type userBudget {
    user: user
    budget: [budget]
  },

  type budget {
    id: ID
    userId: ID
    categoryId: ID
    durationInMonths: Int
    startDate: Date
  },

  type budgetItem {
    id: ID
    category: category
    durationInMonths: Int
    startDate: Date
  },

  type category {
    id: ID
    name: String
    description: String
  }
`;

//cap types "User"