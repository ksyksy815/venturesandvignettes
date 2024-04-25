"use client";

import PageLoading from "@/components/shared/PageLoading";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useCommentForm from "@/hooks/comment/useCommentForm";
import { CommentFormData, commentSchema } from "@/utils/schema/comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  postId: string;
  postSlug: string;
};

const CommentForm = ({ postId, postSlug }: Props) => {
  const { addComment, status } = useCommentForm({
    postId,
    slug: postSlug,
  });

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

    addComment(data);
  };

  if (status === "pending") {
    return (
      <div
        className={`fixed top-0 left-0 grid place-content-center w-screen h-screen bg-black/60`}
      >
        <PageLoading />
      </div>
    );
  }

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
