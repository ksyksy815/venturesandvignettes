import queryKeys from "@/constants/queryKeys";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "@/lib/actions/category.action";
import categoryClient from "@/lib/services/category.service";
import {
  CreateCategoryParams,
  DeleteCategoryParams,
  UpdateCategoryParams,
} from "@/types/category.type";
import { useMutation, useQuery } from "@tanstack/react-query";

const useFetchCategoryList = () => {
  const path = `/admin/management`;

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.category.list],
    queryFn: categoryClient.getUserList,
  });

  const { mutate: createCategoryMutate, isPending: isPendingCreation } =
    useMutation({
      mutationKey: [queryKeys.category.create],
      mutationFn: createCategory,
    });

  const { mutate: updateCategoryMutate, isPending: isPedingUpdate } =
    useMutation({
      mutationKey: [queryKeys.category.update],
      mutationFn: updateCategory,
    });

  const { mutate: deleteCategoryMutate, isPending: isPendingDeletion } =
    useMutation({
      mutationKey: [queryKeys.category.delete],
      mutationFn: deleteCategory,
    });

  const handleCreate = async (category: CreateCategoryParams["category"]) => {
    createCategoryMutate({ category, path });
  };

  const handleUpdate = async (category: UpdateCategoryParams["category"]) => {
    updateCategoryMutate({ category, path });
  };

  const handleDelete = async (
    categoryId: DeleteCategoryParams["categoryId"]
  ) => {
    deleteCategoryMutate({ categoryId, path });
  };

  return {
    data,
    isLoading:
      isLoading || isPendingCreation || isPedingUpdate || isPendingDeletion,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};

export default useFetchCategoryList;
