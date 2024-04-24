"use server";

import { Tag as TagType } from "@/types/tag.type";
import { connectToDatabase } from "../database";
import { Tag } from "../database/models/tag.model";
import { handleError } from "../utils";

export const getAllTags = async () => {
  try {
    await connectToDatabase();

    const tags = await Tag.find().limit(30);

    return tags.map((tag) => JSON.parse(JSON.stringify(tag))) as TagType[];
  } catch (error) {
    handleError(error);
  }
};

export const createTags = async (names: string[]) => {
  try {
    await connectToDatabase();

    const newTags = await Tag.insertMany(names.map((name) => ({ name })));

    return newTags.map((tag) => JSON.parse(JSON.stringify(tag)));
      
  } catch (error) {
    handleError(error);
  }
};

export const getTagIds = async (tagString: string) => {
  try {
    const tagNames = tagString.split(",").map((tag) => tag.trim());

    await connectToDatabase();

    const tagIds = [];

    for (const name of tagNames) {
      let tag = await Tag.findOne({ name });

      if (!tag) {
        tag = await Tag.create({ name });
      }

      tagIds.push(tag._id);
    }

    return JSON.parse(JSON.stringify(tagIds)) as string[];
  } catch (error) {
    handleError(error);
  }
};