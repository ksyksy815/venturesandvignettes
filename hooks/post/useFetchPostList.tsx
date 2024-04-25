import queryKeys from "@/constants/queryKeys";
import postClient from "@/lib/services/post.service";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const useFetchPostList = () => {
  const searchParams = useSearchParams();
  const [currentCategory, setCurrentCategory] = useState("ALL");
  const [page, setPage] = useState(0);
  const keyword = searchParams.get("keyword") || "";

  const { data, isLoading, isFetched } = useQuery({
    queryKey: [queryKeys.post.list, currentCategory, keyword, page],
    queryFn: async () =>
      await postClient.getPostList({
        categoryName: currentCategory === "ALL" ? "" : currentCategory,
        page,
        keyword,
      }),
  });

  const updateCurrentCategory = (name: string) => {
    setCurrentCategory(name);
  };

  return {
    postList: data?.data || [],
    totalPages: data?.totalPages || 0,
    isLoading,
    isFetched,
    currentCategory,
    updateCurrentCategory,
  };
};

export default useFetchPostList;
