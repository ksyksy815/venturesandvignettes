import { useEffect, useState } from "react";
import useFetchCategoryList from "./useFetchCategoryList";

const useCategoryManagement = () => {
  const { data, isLoading, handleCreate, handleUpdate, handleDelete } =
    useFetchCategoryList();

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(isLoading);
  }, [isLoading]);

  return {
    data,
    showLoading,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};

export default useCategoryManagement;
