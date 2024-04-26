"use client";

import MainEditor from "@/components/editor/MainEditor";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { POST_DEFAULT_VALUES } from "@/constants";
import useMainEditor from "@/hooks/editor/useMainEditor";
import useCreatePostPage from "@/hooks/post/useCreatePostPage";
import { CustomElement } from "@/types/editor.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DropDown from "./DropdDown";
import FileUploader from "./FileUploader";

const schema = z.object({
  title: z.string().min(3, { message: "Title is required." }),
  slug: z.string().min(3, { message: "Slug is required." }),
  summary: z.string().min(3, { message: "Summary is required." }),
  categoryId: z.string().min(3, { message: "Category is required." }),
  tags: z.string(),
  image: z.string(),
});

export type PostMetaData = z.infer<typeof schema>;

type Props = {
  type: "CREATE" | "UPDATE";
  post?: CustomElement[];
  metaInfo?: any;
};

const PostForm = ({ type, post, metaInfo }: Props) => {
  const { editor, initialValue } = useMainEditor({ post });
  const { handleCreatePost, status } = useCreatePostPage();
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<PostMetaData>({
    resolver: zodResolver(schema),
    defaultValues: type === "UPDATE" ? metaInfo : POST_DEFAULT_VALUES,
  });

  const onSubmit = async (data: any) => {
    await handleCreatePost(data, editor.children, files);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`flex flex-col gap-y-8`}
        >
          <div className={`w-full flex flex-col`}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className={`h-12 w-full text-2xl px-0 font-medium bg-transparent rounded-none focus:outline-none placeholder:font-normal border-b border-black/15`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <MainEditor editor={editor} initialValue={initialValue} />
          </div>

          <section className={`w-full flex flex-col gap-y-8`}>
            <h2 className={`h2 border-b border-black/15 py-3`}>
              Meta Information
            </h2>

            <div className={`w-full flex flex-col gap-y-2`}>
              <h3 className={`text-xl font-medium`}>Slug</h3>
              <FormField
                control={form.control}
                name={"slug"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Slug" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className={`w-full flex flex-col gap-y-2`}>
              <h3 className={`text-xl font-medium`}>Summary</h3>
              <FormField
                control={form.control}
                name={"summary"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Summary" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className={`w-full flex flex-col gap-y-2`}>
              <h3 className={`text-xl font-medium`}>Category</h3>
              <FormField
                control={form.control}
                name={"categoryId"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <DropDown
                        onChangeHandler={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className={`w-full flex flex-col gap-y-2`}>
              <h3 className={`text-xl font-medium`}>Tags</h3>
              <FormField
                control={form.control}
                name={"tags"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Tags" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className={`w-full flex flex-col gap-y-2`}>
              <h3 className={`text-xl font-medium`}>Image</h3>
              <p
                className={`text-sm text-vv-darkGray`}
              >{`This image is for the main slider. The preferred size of the image is 1280x720. (16:9)`}</p>
              <FormField
                control={form.control}
                name={"image"}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FileUploader
                        onFieldChange={field.onChange}
                        imageUrl={field.value}
                        setFiles={setFiles}
                        height={539}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </section>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? `Submitting...` : `Submit`}
          </Button>
        </form>
      </Form>

      {status === "pending" && (
        <div
          className={`fixed top-0 left-0 grid place-content-center w-screen h-screen bg-black/30 text-center text-white`}
        >
          I am a temporary loading component!
        </div>
      )}
    </>
  );
};

export default PostForm;
