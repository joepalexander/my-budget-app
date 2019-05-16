const { gql } = require("apollo-server-express");

module.exports = `
  scalar Date
  
  type User {
    id: ID
    firstName: String
    lastName: String
    createdAt: Date
    updatedAt: Date
    email: String
    hashedPass: String
    salt: String
    count: Int
  },

  type LoginResponse {
    accessToken: String
    refreshToken: String
  }
  type Budget {
    id: ID
    userId: ID
    categoryId: ID
    durationInMonths: Int
    startDate: Date
    category: Category
    name: String
    description: String
  },

  type Category {
    id: ID
    name: String
    description: String
  }
`;

//cap types "User"