"use server";

import {
  CreateCategoryParams,
  DeleteCategoryParams,
  UpdateCategoryParams,
} from "@/types/category.type";
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database";
import { Category } from "../database/models/category.model";
import { handleError } from "../utils";

export const createCategory = async ({
  category,
  path,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create(category);

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const updateCategory = async ({
  category,
  path,
}: UpdateCategoryParams) => {
  try {
    await connectToDatabase();

    const categoryToUpdate = await Category.findById(category._id);

    if (!categoryToUpdate) {
      throw new Error("The category you are trying to update does not exist.");
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      category._id,
      category,
      { new: true }
    );

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedCategory));
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};

export const deleteCategory = async ({ categoryId, path }: DeleteCategoryParams) => {
  try {
    await connectToDatabase();

    const deletedCategory = await Category.findById(categoryId);
    if (!deletedCategory) {
      throw new Error("The category you are trying to delete does not exist.");
    } else {
      revalidatePath(path);
    }
  } catch (error) {
    handleError(error);
  }
};
