// const usersResolver = require("./users")
module.exports = {
  // ...userResolver.queries
  
  users: (parent, args, { db }, info) => {
    return db.user.findAll();
  },

  userByEmail: (parent, args, { db }, info) => {
    return db.user.findOne({ where: { email: args.email}})
  }
}
