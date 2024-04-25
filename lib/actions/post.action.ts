"use server";

import {
  CreateBlogPostParams,
  DeleteBlogPostParams,
  GetAllBlogPostsParams,
  GetBlogPostsByCategory,
  GetBlogPostsByTagParams,
  UpdateBlogPostParams,
} from "@/types/post.type";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import { Category } from "../database/models/category.model";
import { Post } from "../database/models/post.model";
import { Tag } from "../database/models/tag.model";
import User from "../database/models/user.model";
import { handleError } from "../utils";

export const getCategoryById = async (categoryId: string) => {
  try {
    await connectToDatabase();

    return await Category.findById(categoryId);
  } catch (error) {
    handleError(error);
  }
};

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populatePost = (query: any) => {
  return query
    .populate({
      path: "author",
      model: User,
      select: "_id username",
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

    const newPost = await Post.create({
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
  keyword = "",
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

    const categoryCondition = category ? await getCategoryById(category) : null;

    const conditions = {
      $or: [titleCondition, summaryCondition],
      ...(categoryCondition && { category: categoryCondition._id }),
    };

    const skipAmount = page <= 0 ? 0 : (Number(page) - 1) * limit;

    const blogPostQuery = Post.aggregate([
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },
      {
        $match: {
          $or: [
            conditions,
            { "tags.name": { $regex: keyword, $options: "i" } },
          ],
        },
      },
      { $skip: skipAmount },
      { $limit: limit },
    ]);

    const blogPosts = await blogPostQuery.exec();
    const blogCount = await Post.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(blogPosts)),
      totalPages: Math.ceil(blogCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const getFeaturedPosts = async () => {
  try {
    await connectToDatabase();

    const conditions = { isFeatured: true };
    const featuredPosts = await populatePost(
      Post.find(conditions).sort({ createdAt: "desc" })
    );

    return JSON.parse(JSON.stringify(featuredPosts));
  } catch (error) {
    handleError(error);
  }
};

export const getBlogPostById = async (postId: string) => {
  try {
    await connectToDatabase();

    const post = await Post.findById(postId)
      .populate({
        path: "author",
        model: User,
        select: "_id username",
      })
      .populate({
        path: "category",
        model: Category,
        select: "_id name",
      })
      .populate({
        path: "tags",
        model: Tag,
        select: "_id name",
      });

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

    const blogPostQuery = await Post.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const blogPost = await populatePost(blogPostQuery);
    const postCount = await Post.countDocuments(conditions);

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

    const skipAmount = page === 0 ? page : (Number(page) - 1) * limit;
    const conditions = { category: await getCategoryByName(category) };

    const blogPost = await Post.find(conditions)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const postCount = await Post.countDocuments(conditions);

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

    const postToUpdate = await Post.findById(blogPostId);
    if (!postToUpdate) throw new Error("Post not found");

    const updatedPost = await Post.findByIdAndUpdate(
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

    const deletedPost = await Post.findByIdAndDelete(blogPostId);
    if (deletedPost) revalidatePath(path);
  } catch (error) {
    handleError(error);
  }
};
