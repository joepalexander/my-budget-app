// const usersResolver = require("./users")
const models = require('../models');

module.exports = {
  // ...userResolver.queries

  Budget: async(parent, args, {db, req, res}, info) => {
    
    let data = await db.Budget.findAll({
      where: { userId: req.userId},
      include: [{model: db.Category, as: 'category'}]
    })
    let formattedData = JSON.parse(JSON.stringify(data));
    let results = [];
    
    formattedData.forEach(item => {
      results.push(
        {
          id: item.id,
          durationInMonths: item.durationInMonths,
          startDate: item.startDate,
          categoryId: item.categoryId,
          name: item.category.name,
          description: item.category.description
        }
      )
    })
    console.log(results);
    return results;
  },

  Expenses: async(parent, args, {db, req, res}, info) => {
    
    let data = await db.Expense.findAll({
      where: { userId: req.userId },
      include: [{model: db.Merchant, as: 'merchant'}]
    })

    let formattedData = JSON.parse(JSON.stringify(data));
    let results = [];

    formattedData.forEach(item => {
      results.push(
        {
          id: item.id,
          categoryId: item.categoryId,
          transactionDate: item.transactionDate,
          amount: item.amount,
          merchant: (item.merchant ? item.merchant.name : null),
          description: item.description
        }
      )
    })
  
    return results;
  }
}
// id: ID
// transactionDate: Date
// merchant: String
// amount: Int
// description: String


// WITH JOINS
// budget: async (parent, args, {db, req, res}, info) => {
//   return await db.Budget.findAll({
//     where: {userId: req.userId},
//     include: [{model: db.Category, as: 'category'}],
//   })
// }