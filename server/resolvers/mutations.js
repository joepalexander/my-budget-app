const bcrypt = require("bcrypt") ;
const jwt = require("jsonwebtoken");
const util = require("../util/auth")

module.exports = {
  
  login: async (parent, args, { db, res }, info) => {
    
    const user = await db.user.findOne({ where: { email: args.email}});
   
    if (!user) {
      throw new Error("Invalid Login");
    }

    const valid = await bcrypt.compare(args.password, user.hashedPass);
    if(!valid) {
      throw new Error("Invalid Login."); 
    }

    const { accessToken, refreshToken } = util.createTokens(user);

    res.cookie('refresh-token', refreshToken);
    res.cookie('access-token', accessToken);

    return user;

  },
  
  register: async (parent, args, { db }, info) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(args.password, salt);
    await db.user.create({
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      hashedPass: hashedPass,
      salt: salt,
      createdAt: new Date(),
      updatedAt: new Date(),
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
  }

};