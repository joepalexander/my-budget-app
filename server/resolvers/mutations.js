const bcrypt = require("bcrypt") ;

module.exports = {
  
  login: async (parent, args, { db }, info) => {
    const user = await db.user.findOne({ where: { email: args.email}});
    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(args.password, user.hashedPass);
    if(!valid) {
      console.log("Wrong Pass.")
      return null;
    }

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
  }
};