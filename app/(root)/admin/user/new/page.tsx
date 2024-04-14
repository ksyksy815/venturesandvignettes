import BasePage from "@/components/shared/BasePage";
import NewUserForm from "@/screens/admin/user/NewUserForm";
import React from "react";

const Page = () => {
  return (
    <BasePage>
      <div className={`w-full flex flex-col items-center gap-y-8 p-6`}>
        <h1 className={`h1`}>Create a New User</h1>
        <NewUserForm />
      </div>
    </BasePage>
  );
};

export default Page;
