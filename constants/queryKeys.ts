import { list } from "postcss";

const queryKeys = {
  admin: {
    memberPassword: "admin/memberPassword",
  },
  user: {
    login: "user/login",
    createUser: "user/new",
    list: "user/list",
  },
};

export default queryKeys;
