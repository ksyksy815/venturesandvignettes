"use server";

import { connectToDatabase } from "../database";
import { Tag } from "../database/models/tag.model";
import { handleError } from "../utils";

export const createTag = async (name: string) => {
  try {
    await connectToDatabase();

    const newTag = await Tag.create({ name });

    return JSON.parse(JSON.stringify(newTag));
  } catch (error) {
    handleError(error);
  }
};
