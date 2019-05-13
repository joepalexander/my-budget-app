const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");
const cors = require("cors");
const jwt = require("express-jwt");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req, res }) => ({ 
    db: db,
    req: req,
    res: res
  })
});


const app = express();

app.use(cookieParser())

app.use((req, res, next) => {
  const accessToken = req.cookies['access-token'];
  try {
    const data = verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userId = 1;
  } catch (err) {

  }
  next();
})

server.applyMiddleware({ app, cors: {
  credentials: true,
  origin: 'http://localhost:3000'
} });

app.listen({ port: 4000 }, (req) =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

