import { Schema, model, InferSchemaType } from "mongoose";
import { UserRole } from "../types";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provide email"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
    maxLength: 50,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.USER,
  },
});

export const UserModel = model("User", userSchema);

export type User = InferSchemaType<typeof userSchema>;
