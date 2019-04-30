const resolvers = {
  
  Query: {
    async getAllUsers (root, { name }) {
      return models.Users.findAll()
    }
  },

  Mutation: {
    async createUser (root, { name }, { models }) {
      return models.Users.create({
        name
      })
    }
  }

}