"use server";

import {
  CreateCommentParams,
  GetAllCommentsParams,
} from "@/types/comment.type";
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

export const getAllComments = async ({
  limit = 20,
  page = 0,
}: GetAllCommentsParams) => {
  try {
    await connectToDatabase();

    const skip = limit * page;
    const comments = await Comment.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return JSON.parse(JSON.stringify(comments));
  } catch (error) {
    handleError(error);
  }
};

export const getCommentsByPostId = async (postId: string) => {
  try {
    await connectToDatabase();

    const comments = await Comment.find({ postId }).sort({ createdAt: 1 });

    return JSON.parse(JSON.stringify(comments));
  } catch (error) {
    handleError(error);
  }
};

export const deleteComment = async () => {};

export const getComments = async () => {};

/* admin only */
export const updateComment = async () => {};
