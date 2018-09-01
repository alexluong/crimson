import { makeExecutableSchema } from "graphql-tools"

import User from "./user"
import userTypes from "./schema"
import userResolvers from "./resolvers"

export { User, userTypes, userResolvers }
