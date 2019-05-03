module.exports = {
  addUser: (parent, args, { db }, info) => {
    return db.Users.create({
      name: args.userName
    }).then(newUser => {
      return db.Users.findAll();
    });
  }
};