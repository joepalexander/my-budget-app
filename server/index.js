const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");
const cors = require("cors");
const jwt = require("express-jwt");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const util = require("./util/auth");


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

app.use(async (req, res, next) => {
  const refreshToken = req.headers['refreshtoken'];
  const accessToken = req.headers['accesstoken'];

  if(!refreshToken && !accessToken){
    return next()
  }
  try {
    const accessTokenArray = accessToken.split(" "), //separate "Bearer token#"
    data = verify(accessTokenArray[1], process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    return next()
  } catch (err) {}

  if(!refreshToken){
    return next();
  }

  let data;

  try {
    const refreshTokenArray = refreshToken.split(" ")
    data = verify(refreshTokenArray[1], process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return next();
  }

  const user = await db.user.findByPk(data.userId);
  // token has been invalidated
  if(!user || user.count !== data.count){
    return next();
  }

  const tokens = util.createTokens(user);
  
  req.userId = data.userId;

  next();
});

server.applyMiddleware({ app, cors: {
  credentials: true,
  origin: 'http://localhost:3000'
  }
});

app.listen({ port: 4000 }, (req) =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

