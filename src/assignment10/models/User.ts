import mongoose from "mongoose";
import UserI from "../interfaces/UserI";

const UserSchema = new mongoose.Schema<UserI>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: new Date().valueOf(),
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
