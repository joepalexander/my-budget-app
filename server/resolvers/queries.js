// const usersResolver = require("./users")
module.exports = {
  // ...userResolver.queries
  
  users: (parent, args, { db }, info) => {
    return db.user.findAll();
  },

  home: async (parent, args, {db, req}, info) => {
    if(!req.userId) {
      throw new Error("You are not logged in.");
    }

    return await db.user.findOne({where: { id: req.userId}});

  },

  budget: (parent, args, { db, user }, info) => {
    if(!user.id) {
      return null;
    }
    return db.budget.findAll({where: { userId: user.id}});
  },

  category: (parent, args, { db, req }, info) => {
    return db.category.findAll({where: { id: args.id}});
  },
}
