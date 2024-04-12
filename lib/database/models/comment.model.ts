import { Document, Schema, model, models } from "mongoose";

export interface IComment extends Document {
  _id: string;
  content: string;
  user: string;
  password: string;
  createdAt: Date;
  isAccepted: boolean;
  blogPostId: string;
}

const commentSchema = new Schema<IComment>({
  content: { type: String, required: true },
  user: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isAccepted: { type: Boolean, default: false },
  blogPostId: { type: String, required: true },
});

const Comment = models.Comment || model<IComment>("Comment", commentSchema);

export default Comment;
