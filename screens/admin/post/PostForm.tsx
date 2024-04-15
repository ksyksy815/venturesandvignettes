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
  category: z.string().min(3, { message: "Category is required." }),
  tags: z.string(),
  image: z.string(),
  thumbnailImage: z
    .string()
    .min(3, { message: "Thumbnail image is required." }),
});

type FormData = z.infer<typeof schema>;

type Props = {
  type: "CREATE" | "UPDATE";
  post?: any;
};

const PostForm = ({ type, post }: Props) => {
  const [files, setFiles] = useState<File[]>([]);

  const initialValues = post && type === "UPDATE" ? post : POST_DEFAULT_VALUES;

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-col gap-y-8`}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Title"
                  {...field}
                  className={`h-12 w-full px-4 text-2xl font-medium bg-transparent focus:outline-none placeholder:font-normal`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <MainEditor />

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
              name={"category"}
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
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className={`w-full flex flex-col gap-y-2`}>
            <h3 className={`text-xl font-medium`}>Thumbnail Image</h3>
            <p
              className={`text-sm text-vv-darkGray`}
            >{`The preferred size of the thumbnail image is 640x360. (16:9)`}</p>
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
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </section>

        {/* <div className={`flex flex-col gap-y-2`}>
          <label htmlFor="slug" className={`ml-4`}>
            Slug:
          </label>
          <Input
            type="text"
            id="slug"
            {...register("slug")}
            placeholder={"Please write slug"}
          />
          {errors.slug && <span>{errors.slug.message}</span>}
        </div>
        <div className={`flex flex-col gap-y-2`}>
          <label htmlFor="summary" className={`ml-4`}>
            Summary:
          </label>
          <Input
            type="text"
            id="summary"
            {...register("summary")}
            placeholder={"Please write summary"}
          />
          {errors.summary && <span>{errors.summary.message}</span>}
        </div>
        <div className={`flex flex-col gap-y-2`}>
          <label htmlFor="category" className={`ml-4`}>
            Category:
          </label>
          <select
            id="category"
            {...register("category")}
            className={`rounded-[32px] bg-white px-4 py-2`}
          >
            {data.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </div> */}

        <Button
          type="submit"
          variant={"orange"}
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default PostForm;
