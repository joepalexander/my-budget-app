module.exports = {
  addUser: (parent, args, { db }, info) => {
    return db.Users.create({
      name: args.name
    }).then(newUser => {
      return db.Users.findAll();
    }).catch(console.log);
  }
};