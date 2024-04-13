import { Document, Schema, model, models } from "mongoose";

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  UNASSIGNED = "NOT-UNASSIGNED",
}

export interface IUser extends Document {
  _id: string;
  email: string;
  passwordHash: string;
  username: string;
  firstName: string;
  lastName: string;
  photo?: string;
  userRole?: UserRole;
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String },
  userRole: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.UNASSIGNED,
    required: true,
  },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
