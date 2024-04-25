"use client";

import PostList from "@/components/shared/PostList";
import PostListSkeleton from "@/components/shared/PostListSkeleton";
import usePostListPage from "@/hooks/post/usePostListPage";
import { useSearchParams } from "next/navigation";
import Categories from "./Categories";
import NoPost from "./NoPost";
import Pagination from "./Pagination";
import SearchResults from "./SearchResults";

const PostListPage = () => {
  const searchParams = useSearchParams();
  const {
    postList,
    categoryList,
    totalPages,
    isLoading,
    currentCategory,
    updateCurrentCategory,
  } = usePostListPage();

  const keyword = searchParams?.get("keyword") || "";

  return (
    <section
      className={`w-full flex flex-col px-4 pt-12 py-6 gap-y-6 lg:px-8 lg:pt-16 lg:pb-8`}
    >
      {keyword ? (
        <SearchResults keyword={keyword} />
      ) : (
        <Categories
          categoryList={categoryList}
          currentCategory={currentCategory}
          updateCategoryName={updateCurrentCategory}
        />
      )}

      {isLoading && <PostListSkeleton />}
      {!isLoading && postList?.length > 0 ? (
        <>
          <PostList list={postList} />
          <Pagination totalPages={totalPages} currentPage={0 + 1} />
        </>
      ) : (
        <NoPost />
      )}
    </section>
  );
};

export default PostListPage;
