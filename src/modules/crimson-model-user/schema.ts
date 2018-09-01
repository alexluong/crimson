import { gql } from "apollo-server-express"

const userDefinition = gql`
  enum Role {
    HACKER
    SPONSOR
    ORGANIZER
  }

  type Profile {
    firstName: String
    lastName: String
    school: String
    company: String
  }

  input ProfileInput {
    firstName: String
    lastName: String
    school: String
    company: String
  }

  type User {
    id: ID!
    email: String!
    role: Role!
    profile: Profile!
  }

  extend type Query {
    allUsers: [User]!
  }

  extend type Mutation {
    createUser(email: String!, role: Role!, profile: ProfileInput!): User!
  }
`

export default userDefinition
