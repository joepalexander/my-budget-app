// const usersResolver = require("./users")
const models = require('../models');
module.exports = {
  // ...userResolver.queries
  
  users: (parent, args, { db }, info) => {
    return db.user.findAll({
      include: [{model: db.budget }]
    });
  },

  home: async (parent, args, {db, req, res}, info) => {
    if(!req.userId) {
      return res.status(403)
    }

    let user = await db.user.findOne({where: { id: req.userId}});
    let budget = await db.budget.findAll({where: {userId: req.userId}});

    let budgetItems = budget.map( async (item) => {
      let categoryObject = await db.category.findOne({where: {id: item.categoryId}});
      item.category = await categoryObject.dataValues
    })

    await Promise.all(budgetItems)
    console.log(JSON.stringify(budgetItems))

    return userBudget = {
      user: user,
      budget: budget
    }
  }
}
