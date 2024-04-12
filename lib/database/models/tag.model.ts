import { Document, Schema, model, models } from "mongoose";

export interface ITag extends Document {
  _id: string;
  name: string;
  slug: string;
  show: boolean;
  createdAt: Date;
}

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  show: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

export const Tag = models.Tag || model<ITag>("Tag", tagSchema);
