const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const models = require('./models')
const sequelize = require('sequelize')

const budgetDB = new sequelize;

budgetDB
  .authenticate()
  .then(() => {
    console.log("Connected to database.")
  })
  .catch(() => {
    console.log("Unable to connect to database.")
  })

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
