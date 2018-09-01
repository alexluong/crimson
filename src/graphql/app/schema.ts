import { gql } from "apollo-server-express"
import { User, userTypes, userResolvers } from "modules/crimson-model-user"

const basicType = gql`
  type Query {
    info: String
  }
  type Mutation {
    info: String
  }
`

export const typeDefs = [basicType, userTypes]

export const resolvers = {
  Query: {
    info: () => "App!",
    ...userResolvers.Query,
  },
  Mutation: {
    info: () => "Mutation",
    ...userResolvers.Mutation,
  },
}

export const context = { User }
