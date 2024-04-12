"use server";

import {
  CreateBlogPostParams,
  DeleteBlogPostParams,
  GetAllBlogPostsParams,
  GetBlogPostsByCategory,
  GetBlogPostsByTagParams,
  UpdateBlogPostParams,
} from "@/types/blogPost.type";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import { BlogPost } from "../database/models/blogPost.model";
import { Category } from "../database/models/category.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populatePost = (query: any) => {
  return query
    .poopulate({
      path: "author",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({
      path: "category",
      model: Category,
      select: "_id name description",
    });
};

export const createBlogPost = async ({
  userId,
  blogPost,
  path,
}: CreateBlogPostParams) => {
  try {
    await connectToDatabase();

    const newPost = await BlogPost.create({
      ...blogPost,
      author: userId,
      category: blogPost.categoryId,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    handleError(error);
  }
};

export const getAllBlogPosts = async ({
  limit = 10,
  page = 0,
  keyword,
  category,
}: GetAllBlogPostsParams) => {
  try {
    await connectToDatabase();

    const titleCondition = keyword
      ? { title: { $regex: keyword, $options: "i" } }
      : {};
    const summaryCondition = keyword
      ? { summary: { $regex: keyword, $options: "i" } }
      : {};
    const tagCondition = keyword
      ? { tags: { $regex: keyword, $options: "i" } }
      : {};
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;

    const conditions = {
      $or: [titleCondition, summaryCondition, tagCondition],
      ...(categoryCondition && { category: categoryCondition._id }),
    };

    const skipAmount = (Number(page) - 1) * limit;
    const blogPostQuery = BlogPost.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const blogPosts = await populatePost(blogPostQuery);
    const blogCount = await BlogPost.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(blogPosts)),
      totalPages: Math.ceil(blogCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const getBlogPostById = async (postId: string) => {
  try {
    await connectToDatabase();

    const post = await BlogPost.findById(postId);

    if (!post) throw new Error("Post not found");

    return JSON.parse(JSON.stringify(post));
  } catch (error) {
    handleError(error);
  }
};

export const getBlogPostsByTag = async ({
  tag,
  limit = 10,
  page = 0,
}: GetBlogPostsByTagParams) => {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = { tags: { $regex: tag, $options: "i" } };

    const blogPostQuery = await BlogPost.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const blogPost = await populatePost(blogPostQuery);
    const postCount = await BlogPost.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(blogPost)),
      totalPages: Math.ceil(postCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const getBlogPostsByCategory = async ({
  category,
  limit = 10,
  page = 0,
}: GetBlogPostsByCategory) => {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const conditions = { category: await getCategoryByName(category) };

    const blogPostQuery = await BlogPost.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const blogPost = await populatePost(blogPostQuery);
    const postCount = await BlogPost.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(blogPost)),
      totalPages: Math.ceil(postCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const updateBlogPost = async ({
  blogPostId,
  blogPost,
  path,
}: UpdateBlogPostParams) => {
  try {
    await connectToDatabase();

    const postToUpdate = await BlogPost.findById(blogPostId);
    if (!postToUpdate) throw new Error("Post not found");

    const updatedPost = await BlogPost.findByIdAndUpdate(
      blogPost._id,
      { ...blogPost, updatedAt: new Date(), category: blogPost.categoryId },
      { new: true }
    );

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedPost));
  } catch (error) {
    handleError(error);
  }
};

export const deleteBlogPost = async ({
  blogPostId,
  path,
}: DeleteBlogPostParams) => {
  try {
    await connectToDatabase();

    const deletedPost = await BlogPost.findByIdAndDelete(blogPostId);
    if (deletedPost) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
};
