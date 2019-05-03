module.exports = {
  users: (parent, args, { db }, info) => {
    return db.Users.getAllUsers();
  }
}