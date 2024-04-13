"use server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { AddNewUserParams, UpdateUserParams } from "@/types/user.type";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";

const JWT_SECRET = process.env.JWT_SECRET!;

export const getUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error(
        "No user found with this email. Please check your email."
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordCorrect) {
      throw new Error("Invalid password. Please check your password.");
    }

    return user;
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    await connectToDatabase();

    const user = await getUserByEmailAndPassword(email, password);

    if (user) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      // Set the token as a cookie
      return {
        headers: {
          "Set-Cookie": cookie.serialize("auth", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600,
            path: "/",
          }),
        },
      };
    }
  } catch (error) {
    handleError(error);
  }
};

export const addNewUser = async (params: AddNewUserParams) => {
  try {
    await connectToDatabase();

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(params.password, salt);

    const newUser = new User({
      ...params,
      passwordHash,
    });

    const savedUser = await User.create(newUser);

    return savedUser;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserInfo = async (params: UpdateUserParams) => {
  try {
    await connectToDatabase();

    const { currentUserId, userIdToUpdate, fieldsToUpdate } = params;

    const currentUser = await User.findById(currentUserId);

    if (currentUser.userRole !== "ADMIN") {
      throw new Error("Only admin accounts can update user roles.");
    }

    const user = await User.findById(userIdToUpdate);

    if (!user) {
      throw new Error("The user is not found. Please check the ID.");
    }

    if (fieldsToUpdate.password) {
      const salt = await bcrypt.genSalt(10);
      fieldsToUpdate.password = await bcrypt.hash(
        fieldsToUpdate.password,
        salt
      );
    }

    const updatedUser = await User.findByIdAndUpdate(
      userIdToUpdate,
      fieldsToUpdate,
      { new: true }
    );

    return updatedUser;
  } catch (error) {
    handleError(error);
  }
};
