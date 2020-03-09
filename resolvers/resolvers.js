
const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findByPk(id);
    }
  },
  Mutation: {
    async createUser(root, { email, passwordDigest, token }, { models }) {
      return models.User.create({
        email,
        passwordDigest,
        token
      });
    }
  }
};

export default resolvers;
