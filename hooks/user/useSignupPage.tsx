import React, { useEffect, useState } from "react";
import useMutateUser from "./useMutateUser";
import useLogin from "./useLogin";
import { AddNewUserParams } from "@/types/user.type";
import { useRouter } from "next/navigation";

const useSignupPage = () => {
  const router = useRouter();
  const { createUser, isSuccess } = useMutateUser();
  const { loginUser, isSuccess: successfullyLoggedin } = useLogin();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isSuccess) {
      loginUser(userInfo.email, userInfo.password);
    }
  }, [isSuccess, loginUser, userInfo]);

  useEffect(() => {
    if (successfullyLoggedin) {
      router.push("/admin");
    }
  }, [successfullyLoggedin]);

  const addNewUser = async (params: AddNewUserParams) => {
    createUser(params);
    setUserInfo(params);
  };

  return {
    addNewUser,
  };
};

export default useSignupPage;
