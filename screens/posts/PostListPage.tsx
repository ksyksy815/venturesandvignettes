"use client";

import PostList from "@/components/shared/PostList";
import useFetchPostList from "@/hooks/post/useFetchPostList";
import Categories from "./Categories";
import NoPost from "./NoPost";
import Pagination from "./Pagination";

const PostListPage = () => {
  const {
    postList,
    totalPages,
    isLoading,
    currentCategory,
    updateCurrentCategory,
  } = useFetchPostList();

  return (
    <section
      className={`w-full flex flex-col px-4 pt-12 py-6 gap-y-6 lg:px-8 lg:pt-16 lg:pb-8`}
    >
      <Categories
        currentCategory={currentCategory}
        updateCategoryName={updateCurrentCategory}
      />
      {isLoading && <div>Loading...</div>}
      {postList?.length > 0 ? (
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
