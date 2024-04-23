"use client";

import { Category } from "@/types/category.type";
import Pill from "./Pill";

type Props = {
  categoryList: Category[];
  currentCategory: string;
  updateCategoryName: (name: string) => void;
};
const Categories = ({
  categoryList = [],
  currentCategory,
  updateCategoryName,
}: Props) => {
  return (
    <section
      className={`flex w-full items-center whitespace-nowrap overflow-x-scroll scrollbar-hide gap-x-2`}
    >
      <Pill
        text={"All"}
        id={"ALL"}
        onClick={() => updateCategoryName("ALL")}
        currentCategory={currentCategory}
      />
      {categoryList?.map((category: Category) => (
        <Pill
          key={category.name}
          id={category._id}
          text={category.name}
          onClick={() => updateCategoryName(category._id)}
          currentCategory={currentCategory}
        />
      ))}
    </section>
  );
};

export default Categories;
