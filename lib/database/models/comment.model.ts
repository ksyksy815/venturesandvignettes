import { Document, Schema, model, models } from "mongoose";

export interface IComment extends Document {
  _id: string;
  user: string;
  email: string;
  postId: string;
  content: string;
  url?: string;
  isAccepted: boolean;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  email: { type: String, required: true },
  postId: { type: String, required: true },
  content: { type: String, required: true },
  url: { type: String },
  isAccepted: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = models.Comment || model<IComment>("Comment", commentSchema);

export default Comment;
