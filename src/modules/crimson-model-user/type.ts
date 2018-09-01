import { Document } from "mongoose"

export enum Role {
  HACKER,
  SPONSOR,
  ORGANIZER,
}

export interface IUserModel extends Document {
  email: string
  profile: {
    firstName?: string
    lastName?: string
    school?: string
    company?: string
  }
  role: Role
}
