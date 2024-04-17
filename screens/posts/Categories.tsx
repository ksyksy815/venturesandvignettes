"use client";

import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";
import { Category } from "@/types/category.type";
import Pill from "./Pill";

type Props = {
  currentCategory: string;
  updateCategoryName: (name: string) => void;
};
const Categories = ({ currentCategory, updateCategoryName }: Props) => {
  const { data } = useFetchCategoryList();

  return (
    <section
      className={`flex w-full items-center whitespace-nowrap overflow-x-scroll scrollbar-hide gap-x-2`}
    >
      <Pill
        text={"All"}
        onClick={() => updateCategoryName("ALL")}
        currentCategory={currentCategory}
      />
      {data?.map((category: Category) => (
        <Pill
          key={category.name}
          text={category.name}
          onClick={() => updateCategoryName(category.name)}
          currentCategory={currentCategory}
        />
      ))}
    </section>
  );
};

export default Categories;
