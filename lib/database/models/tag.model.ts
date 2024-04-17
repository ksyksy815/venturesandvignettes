import { Document, Schema, model, models } from "mongoose";

export interface ITag extends Document {
  _id: string;
  name: string;
}

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
});

export const Tag = models.Tag || model<ITag>("Tag", tagSchema);
