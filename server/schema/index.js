const { makeExecutableSchema } = require("graphql-tools");
const mutations = require("./mutations");
const queries = require("./queries");
const types = require("./types");

const typeDefs = [mutations, queries, types];

module.exports = typeDefs;

// module.exports = [
//   mutations,
//   queries,
//   types
// ]

// module.exports = {
//   Query: queries,
//   Mutations: mutations
// };