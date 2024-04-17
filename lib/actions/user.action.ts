"use server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { AddNewUserParams, UpdateUserParams } from "@/types/user.type";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { handleError } from "../utils";
import { LOGIN_COOKIE } from "@/constants";

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

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const getAllUsers = async () => {
  try {
    await connectToDatabase();
    console.log("getAllUsers");
    const users = await User.find();

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    await connectToDatabase();

    const user = await getUserByEmailAndPassword(email, password);

    if (!user) {
      throw new Error(
        "No user found with this email. Please check your email."
      );
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return {
      headers: {
        "Set-Cookie": cookie.serialize(LOGIN_COOKIE, token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        }),
      },
      user: JSON.parse(JSON.stringify(user)),
    };
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
      photo: params.photo || "",
      passwordHash,
    });

    const savedUser = await User.create(newUser);

    return JSON.parse(JSON.stringify(savedUser));
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

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const checkMemberPassword = (password: string) => {
  try {
    if (password !== process.env.MEMBER_PASSWORD) {
      return false;
    }

    return true;
  } catch (error) {
    handleError(error);
  }
};
