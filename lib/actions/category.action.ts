import { Document, Schema, model, models } from "mongoose";

export interface IBlogPostCategory extends Document {
  _id: string;
  name: string;
  description: string;
}

const categorySchema = new Schema<IBlogPostCategory>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

export const Category = models.Category || model("Category", categorySchema);
