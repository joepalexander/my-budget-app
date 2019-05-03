const { makeExecutableSchema } = require("graphql-tools");
const mutations = require("./mutations");
const queries = require("./queries");

module.exports = {
  Query: queries,
  Mutations: mutations
};