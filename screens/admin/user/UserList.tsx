import { UserInfo } from "@/types/user.type";
import React from "react";

type Props = {
  list: UserInfo[];
};

const UserList = ({ list }: Props) => {
  return (
    <section
      className={"w-full flex flex-col border border-black/15 text-center"}>
      <div className={`w-full flex items-center border-b border-black/15`}>
        <span className={`w-10`}>No.</span>
        <span className={`w-[30%]`}>Username</span>
        <span className={`flex-1`}>Email</span>
        <span className={`w-[30%]`}>Role</span>
      </div>
      {list.map((user, index) => {
        const { _id, username, email, userRole } = user;
        return (
          <div
            key={_id}
            className={`w-full flex items-center border-b border-black/15`}>
            <span className={`w-10`}>{index + 1}</span>
            <span className={`w-[30%]`}>{username}</span>
            <span className={`flex-1`}>{email}</span>
            <span className={`w-[30%]`}>{userRole}</span>
          </div>
        );
      })}
    </section>
  );
};

export default UserList;
