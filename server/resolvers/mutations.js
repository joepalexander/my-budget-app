module.exports = {
  createUser: (parent, args, { db }, info) => {
    return db.users.create({
      name: args.name,
      created_at: new Date(),
      updated_at: new Date(),
    }).then(newUser => {
      return db.users.findAll();
    }).catch(console.log);
  }
};