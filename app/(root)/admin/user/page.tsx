import BasePage from "@/components/shared/BasePage";
import { getAllUsers } from "@/lib/actions/user.action";
import UserList from "@/screens/admin/user/UserList";
import React from "react";

const Page = async () => {
  const list = await getAllUsers();

  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className={`h1`}>Users</h1>
      <UserList list={list} />
    </BasePage>
  );
};

export default Page;
