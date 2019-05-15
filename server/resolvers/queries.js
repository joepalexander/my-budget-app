// const usersResolver = require("./users")
const models = require('../models');
module.exports = {
  // ...userResolver.queries
  
  users: (parent, args, { db }, info) => {
    return db.user.findAll({
      include: [
        {
          model: db.budget, 
          as: 'budget',
          include: [
            {
              model: db.category,
              as: 'category'
            }
          ]
        }
      ]
    });
  },

  home: async (parent, args, {db, req, res}, info) => {
    console.log("userId: ", req.userId)
    return await db.user.findOne({
      where: {id: req.userId},
      include: [
        {
          model: db.budget, 
          as: 'budget',
          include: [
            {
              model: db.category,
              as: 'category'
            }
          ]
        }
      ]
    })
  }
}
