const userResolvers = {
  Query: {
    allUsers: async (parent, args, { User }) => {
      const users = await User.find()

      return users
    },
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save()

      return user
    },
  },
}

export default userResolvers
