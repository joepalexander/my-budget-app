const { makeExecutableSchema } = require("graphql-tools");
const mutations = require("./mutations");
const queries = require("./queries");
const types = require("./types");
const { gql } = require("apollo-server-express");


const typeDefs = gql`
  ${types} 
  ${queries} 
  ${mutations}
`
module.exports = typeDefs;