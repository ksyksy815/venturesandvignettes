import useFetchCategoryList from "../category/useFetchCategoryList";
import useFetchPostList from "./useFetchPostList";

const usePostListPage = () => {
  const {
    postList,
    totalPages,
    isLoading,
    currentCategory,
    updateCurrentCategory,
  } = useFetchPostList();

  const { data: categoryList } = useFetchCategoryList();

  return {
    postList,
    categoryList,
    totalPages,
    isLoading,
    currentCategory,
    updateCurrentCategory,
  };
};

export default usePostListPage;
