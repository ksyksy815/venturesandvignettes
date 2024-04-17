"use client";

import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";
import { useRouter } from "next/navigation";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CategoryList = () => {
  const router = useRouter();
  const { data = [] } = useFetchCategoryList();

  return (
    <ul className={`w-full flex-flex-col border border-black/15`}>
      <div
        className={`w-full flex items-center py-2 px-4 border-b border-black/15 font-medium`}
      >
        <div className={`min-w-[200px]`}>Name</div>
        <div>Description</div>
        <div className={`min-w-[150px]`} />
      </div>
      {data.map((category) => (
        <li
          key={category._id}
          className={`flex items-center w-full gap-x-2 py-2 px-4 border-b border-black/15 hover:bg-white`}
        >
          <span className={`min-w-[200px]`}>{category.name}</span>
          <span>{category.description}</span>
          <div className={`flex items-center justify-center gap-x-2 py-2 px-4`}>
            <button
              type={"button"}
              onClick={() => {
                // TODO: Open single category edit modal
                // Modal must have two fields: name and description
              }}
            >
              <FiEdit />
            </button>
            <button>
              <FiTrash2 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
