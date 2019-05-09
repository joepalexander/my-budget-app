module.exports = {
  createUser: (parent, args, { db }, info) => {
    return db.users.create({
      name: args.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(newUser => {
      return db.users.findAll();
    }).catch(console.log);
  }
};