const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");
const cors = require("cors");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { db }
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);