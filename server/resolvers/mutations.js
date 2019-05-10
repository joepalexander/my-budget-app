const bcrypt = require("bcrypt") ;

module.exports = {
  
  login: async (parent, args, { db }, info) => {

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
  }
};