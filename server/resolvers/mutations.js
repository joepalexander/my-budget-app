const bcrypt = require("bcrypt") ;
const jwt = require("jsonwebtoken");
const util = require("../util/auth")

module.exports = {
  
  login: async (parent, args, { db, res }, info) => {
    
    const user = await db.User.findOne({ where: { email: args.email}});
   
    if (!user) {
      return res.status(404)
    }

    const valid = await bcrypt.compare(args.password, user.hashedPass);
    if(!valid) {
      return res.status(400)
    }

    const { accessToken, refreshToken } = util.createTokens(user);

    let loginResponse = {
      accessToken: accessToken,
      refreshToken: refreshToken
    }
    // res.cookie('refresh-token', refreshToken);
    // res.cookie('access-token', accessToken);

    return loginResponse;

  },
  
  register: async (parent, args, { db }, info) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(args.password, salt);
    await db.User.create({
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      hashedPass: hashedPass,
      salt: salt,
      createdAt: new Date(),
      updatedAt: new Date(),
      count: 0
    }).then( () => {
      console.log("User Registered");
    }).catch(console.log);

    return true;
  },

  invalidateTokens: async (_, __, { db, req }, ___ ) => {
    if(!req.userId){
      return false;
    }

    const user = await db.user.findByPk(req.userId)
      if(!user){
        return false;
      }

    let newCount = user.count += 1
    
    await user.update({
      count: newCount
    })

    return true;
  },
    
  addExpense: async (parent, args, { db, req, res }, info) => {
    console.log("Trying to add expense.")
    await db.Expense.create({
      userId: req.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
      transactionDate: args.transactionDate,
      merchantId: +(args.merchantId),
      categoryId: +(args.categoryId),
      amount: +(args.amount),
      description: args.description
    }).then( () => {
      console.log("New Expense Added for User Id: " + req.userId);
    }).catch(console.log);

    return true;
  },

};