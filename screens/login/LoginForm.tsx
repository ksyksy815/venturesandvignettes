"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/user/useLogin";
import useLoginPage from "@/hooks/user/useLoginPage";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(6),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { loginUser } = useLoginPage();

  const onSubmit = (data: LoginFormInputs) => {
    loginUser(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-y-8 md:w-[30vw]`}>
      <h1 className={`h1`}>Login</h1>
      <div className={`flex flex-col gap-y-2`}>
        <Input
          type="text"
          id="email"
          {...register("email")}
          placeholder="email"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <Input
          type="password"
          id="password"
          {...register("password")}
          placeholder="password"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
