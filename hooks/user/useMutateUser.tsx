import queryKeys from "@/constants/queryKeys";
import { addNewUser } from "@/lib/actions/user.action";
import { AddNewUserParams } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const useMutateUser = () => {
  const { data, mutate, isSuccess } = useMutation({
    mutationKey: [queryKeys.user.createUser],
    mutationFn: addNewUser,
  });

  const createUser = async (params: AddNewUserParams) => {
    mutate(params);
  };

  return {
    createUser,
    isSuccess,
  };
};

export default useMutateUser;
