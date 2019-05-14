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
  },

  type loginResponse {
    user: user
    accessToken: String
    refreshToken: String
  }

  type budget {
    id: ID
    userId: ID
    categoryId: ID
    durationInMonths: Int
    startDate: Date
  },

  type category {
    id: ID
    name: String
    description: String
  }
`;