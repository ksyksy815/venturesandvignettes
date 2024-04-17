"use client";

import useFetchCategoryList from "@/hooks/category/useFetchCategoryList";
import { Category } from "@/types/category.type";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import NewCategoryModal from "./NewCategory.modal";

const CategoryList = () => {
  const {
    data = [],
    isLoading,
    handleCreate,
    handleUpdate,
    handleDelete,
  } = useFetchCategoryList();

  return (
    <>
      <section className={`w-full flex flex-col gap-y-4`}>
        <div className={`w-full flex items-center justify-between`}>
          <h2 className={`h2`}>Category List</h2>
          <NewCategoryModal makeCategory={handleCreate} />
        </div>

        <ul className={`w-full flex-flex-col border border-black/15`}>
          <div
            className={`w-full flex items-center py-2 px-4 border-b border-black/15 font-medium`}
          >
            <div className={`min-w-[200px]`}>Name</div>
            <div>Description</div>
            <div className={`min-w-[150px]`} />
          </div>
          {data.map((category: Category) => (
            <li
              key={category._id}
              className={`flex items-center w-full gap-x-2 py-2 px-4 border-b border-black/15 hover:bg-white`}
            >
              <span className={`min-w-[200px]`}>{category.name}</span>
              <span>{category.description}</span>
              <div
                className={`flex items-center justify-center gap-x-2 py-2 px-4`}
              >
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
      </section>

      {isLoading && (
        <div
          className={`fixed top-0 left-0 gird place-content-center w-screen h-screen bg-black/30 text-white text-center`}
        >
          Temporary Loading Scene
        </div>
      )}
    </>
  );
};

export default CategoryList;
