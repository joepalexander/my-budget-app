const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");
const cors = require("cors");
const session = require("express-session");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req }) => ({ 
    db: db,
    req: req })
})

const app = express();

app.use(
  session({
    secret: "asdqwefgh",
    resave: false,
    saveUninitialized: false
  })
);

server.applyMiddleware({ app, cors: {
  credentials: true,
  origin: 'http://localhost:3000'
} });

app.listen({ port: 4000 }, (req) =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
