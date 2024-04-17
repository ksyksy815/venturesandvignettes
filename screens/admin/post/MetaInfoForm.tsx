"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  slug: z.string().min(3, { message: "Slug is required." }),
  summary: z.string().min(3, { message: "Summary is required." }),
  category: z.string().min(3, { message: "Category is required." }),
});

type FormData = z.infer<typeof schema>;

const MetaInfoForm = () => {
  const { data = [] } = useFetchCategoryList();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className={`flex flex-col gap-y-8`}>
      <div className={`flex flex-col gap-y-2`}>
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
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default MetaInfoForm;
