import queryKeys from "@/constants/queryKeys";
import postClient from "@/lib/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useFetchPostList = () => {
  const [currentCategory, setCurrentCategory] = useState("ALL");
  const [page, setPage] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.post.list, currentCategory],
    queryFn: async () =>
      await postClient.getPostList({
        categoryId: currentCategory === "ALL" ? "" : currentCategory,
        page,
      }),
  });

  const updateCurrentCategory = (name: string) => {
    setCurrentCategory(name);
  };

  return {
    postList: data?.data || [],
    totalPages: data?.totalPages || 0,
    isLoading,
    currentCategory,
    updateCurrentCategory,
  };
};

export default useFetchPostList;
