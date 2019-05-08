module.exports = {
  addUser: (parent, args, { db }, info) => {
    return db.Users.create({
      name: args.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(newUser => {
      return db.Users.findAll();
    }).catch(console.log);
  }
};