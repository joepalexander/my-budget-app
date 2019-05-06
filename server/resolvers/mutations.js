module.exports = {
  addUser: (parent, args, { db }, info) => {
    return db.Users.create({
      name: args.userName,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newUser => {
      return db.Users.findAll();
    });
  }
};