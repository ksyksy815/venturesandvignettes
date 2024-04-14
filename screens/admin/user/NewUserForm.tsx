"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useMutateUser from "@/hooks/user/useMutateUser";
import useSignupPage from "@/hooks/user/useSignupPage";

const schema = z.object({
  email: z.string().email().min(6, "Email is required."),
  password: z.string().min(6, "Password is required."),
  username: z.string().min(3, "Username is required."),
  firstName: z.string().min(2, "First Name is required."),
  lastName: z.string().min(2, "Last Name is required."),
  photo: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { addNewUser } = useSignupPage();

  const onSubmit = (data: FormData) => {
    addNewUser(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full flex flex-col gap-y-8 md:max-w-[50vw]`}>
      <div className="flex flex-col gap-y-2">
        <Input type="text" placeholder="Email" {...register("email")} />
        {errors.email && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Input type="text" placeholder="Username" {...register("username")} />
        {errors.username && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.firstName.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Input type="text" placeholder="Last Name" {...register("lastName")} />
        {errors.lastName && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.lastName.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <Input type="text" placeholder="Photo" {...register("photo")} />
        {errors.photo && (
          <span className="text-sm text-vv-orange pl-4">
            {errors.photo.message}
          </span>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default NewUserForm;
