import { ApolloServer, gql } from "apollo-server-express"
import { typeDefs, resolvers, context } from "./schema"

class AppGraphQL {
  constructor() {
    const playground = {
      settings: {
        "editor.cursorShape": "line",
      } as any,
    } // Quick hack because Playground has a cursor bug

    this.app = new ApolloServer({ typeDefs, resolvers, context, playground })
  }

  public app: ApolloServer
}

export default new AppGraphQL().app
