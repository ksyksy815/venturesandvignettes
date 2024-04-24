import { Document, Schema, model, models } from "mongoose";
import { IComment } from "./comment.model";

export interface IPost extends Document {
  _id: string;
  author: { _id: string; firstName: string; lastName: string };
  title: string;
  slug: string; // ex) this-is-a-blog-post
  summary: string;
  content: string;
  category: { _id: string; name: string };
  tags: { _id: string; name: string }[];
  createdAt: Date;
  updatedAt: Date;
  isDisplayed: boolean;
  comments: IComment[];
  image: string; // 16:9 ratio
  isFeatured?: boolean;
  thumbnailImage?: string; // 16:9 ratio. a smaller version of the cover image in the content
}

const postSchema = new Schema<IPost>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isDisplayed: { type: Boolean, default: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  image: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  thumbnailImage: { type: String },
});

export const Post = models.BlogPost || model<IPost>("BlogPost", postSchema);
