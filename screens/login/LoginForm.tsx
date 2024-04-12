"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  id: z.string().nonempty(),
  password: z.string().min(8),
});

type LoginFormInputs = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className={`flex flex-col gap-y-6`}>
      <div className={`flex flex-col`}>
        <label htmlFor="id">ID</label>
        <Input type="text" id="id" {...register("id")} />
        {errors.id && <span>{errors.id.message}</span>}
      </div>
      <div className={`flex flex-col`}>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default LoginForm;
