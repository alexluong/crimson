import { ApolloServer, gql } from "apollo-server-express"

class RegistrationGraphQL {
  constructor() {
    const typeDefs = gql`
      type Query {
        hello: String
      }
    `

    const resolvers = {
      Query: {
        hello: () => {
          return "Hello world!"
        },
      },
    }

    this.app = new ApolloServer({ typeDefs, resolvers })
  }

  public app: ApolloServer
}

export default new RegistrationGraphQL().app
