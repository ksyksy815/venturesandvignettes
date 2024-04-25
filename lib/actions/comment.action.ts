"use server";

import { CreateCommentParams } from "@/types/comment.type";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import Comment from "../database/models/comment.model";
import { Post } from "../database/models/post.model";
import { handleError } from "../utils";

export const createComment = async ({
  user,
  postId,
  email,
  content,
  url,
  path,
}: CreateCommentParams) => {
  try {
    await connectToDatabase();

    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("The blog post does not exist.");
    }

    const newComment = await Comment.create({
      content,
      user,
      email,
      postId,
      url,
      isAccepted: false,
      createdAt: new Date(),
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newComment));
  } catch (error) {
    handleError(error);
  }
};

export const getCommentsByPost = async () => {};

export const deleteComment = async () => {};

export const getComments = async () => {};

/* admin only */
export const updateComment = async () => {};
