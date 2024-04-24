"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  postId: string;
};

const commentSchema = z.object({
  name: z.string().min(3, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  url: z.string().url().optional(),
  content: z
    .string()
    .min(3, { message: "Content is required." })
    .max(250, { message: "Content is too long." }),
});

type CommentFormData = z.infer<typeof commentSchema>;

const CommentForm = ({ postId }: Props) => {
  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      url: "",
      content: "",
    },
  });

  const onSubmit = (data: CommentFormData) => {
    if (!data) return;

    console.log(data);
  };

  return (
    <section className={`flex flex-col w-full px-4 py-8 gap-y-4 lg:p-12`}>
      <h3 className={`text-[20px] font-bold lg:text-2xl`}>Leave a comment</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col w-full gap-y-3`}
        >
          <div
            className={`flex flex-col w-full gap-y-3 lg:flex-row lg:gap-x-3`}
          >
            <div className={`w-full flex flex-col gap-y-2`}>
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                      placeholder={"Name"}
                      className={`bg-vv-lightGray rounded-lg`}
                    />
                  </FormItem>
                )}
              />
              {form.formState.errors.name && (
                <p className={`text-sm text-vv-orange pl-4`}>
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className={`w-full flex flex-col gap-y-2`}>
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                      placeholder={"Email"}
                      className={`bg-vv-lightGray rounded-lg`}
                    />
                  </FormItem>
                )}
              />
              {form.formState.errors.email && (
                <p className={`text-sm text-vv-orange pl-4`}>
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className={`w-full flex flex-col gap-y-2`}>
            <FormField
              control={form.control}
              name={"url"}
              render={({ field }) => (
                <FormItem>
                  <Input
                    {...field}
                    placeholder={"Url"}
                    className={`bg-vv-lightGray rounded-lg`}
                  />
                </FormItem>
              )}
            />
            {form.formState.errors.url && (
              <p className={`text-sm text-vv-orange pl-4`}>
                {form.formState.errors.url.message}
              </p>
            )}
          </div>

          <div className={`w-full flex flex-col gap-y-2`}>
            <FormField
              control={form.control}
              name={"content"}
              render={({ field }) => (
                <FormItem>
                  <Textarea
                    {...field}
                    placeholder={"Write your comment"}
                    className={`bg-vv-lightGray rounded-lg`}
                  />
                </FormItem>
              )}
            />
            {form.formState.errors.content && (
              <p className={`text-sm text-vv-orange pl-4`}>
                {form.formState.errors.content.message}
              </p>
            )}
          </div>

          <Button
            type={"submit"}
            variant={"blackBorder"}
            className="w-[170px] self-end"
          >
            SUBMIT
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default CommentForm;
