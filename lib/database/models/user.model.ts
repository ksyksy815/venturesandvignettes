import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  isAdmin?: boolean;
}

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
