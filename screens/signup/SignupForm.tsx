"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetchCheckMemberPassword from "@/hooks/user/useFetchCheckMemberPassword";
import useCheckMemberPassword from "@/hooks/user/useCheckMemberPassword";

const schema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormValues = {
  password: string;
};

const SignupForm = () => {
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const { data, showErrorMessage } = useCheckMemberPassword(password);

  const onSubmit = (values: FormValues) => {
    setPassword(values.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-y-2 md:w-[40vw]`}>
      <Input type="password" {...register("password")} placeholder="Password" />
      {errors.password?.message && (
        <p className={`px-4 text-vv-orange text-sm`}>
          {(errors.password.message as string) || ""}
        </p>
      )}
      {showErrorMessage && (
        <p className={`px-4 text-vv-orange text-sm`}>
          Password does not match.
        </p>
      )}
      <Button type="submit" className={`mt-4`}>
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
