import { UserRole } from "@/lib/database/models/user.model";

export type AddNewUserParams = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  photo?: string;
};

export type UpdateUserParams = {
  currentUserId: string;
  userIdToUpdate: string;
  fieldsToUpdate: {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    photo?: string;
    userRole?: UserRole;
  };
};

export type UserInfo = {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  userRole: UserRole;
};
