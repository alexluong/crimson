import { Schema, Model, model } from "mongoose"
import { IUserModel } from "./type"

const ProfileContent: Schema = new Schema({
  firstName: String,
  lastName: String,
  school: String,
  company: String,
})

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["HACKER", "SPONSOR", "ORGANIZER"],
  },
  profile: {
    type: ProfileContent,
    required: true,
  },
})

const User: Model<IUserModel> = model("User", userSchema)
export default User
