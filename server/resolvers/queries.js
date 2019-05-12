// const usersResolver = require("./users")
module.exports = {
  // ...userResolver.queries
  
  users: (parent, args, { db }, info) => {
    return db.user.findAll();
  },

  home: (parent, args, {db, req}, info) => {
    if(!req.session.userId) {
      return null;
    }

    return db.user.findOne({where: { id: req.session.userId}});

  },

  budget: (parent, args, { db, req }, info) => {
    if(!req.session.userId) {
      return null;
    }
    return db.budget.findAll({where: { userId: req.session.userId}});
  },

  category: (parent, args, { db, req }, info) => {
    return db.category.findAll({where: { id: args.id}});
  },
}
