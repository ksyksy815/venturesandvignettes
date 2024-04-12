"use client";

import PostList from "@/components/shared/PostList";
import useFetchPostList from "@/hooks/post/useFetchPostList";
import Categories from "./Categories";
import NoPost from "./NoPost";

const PostListPage = () => {
  const { data, currentCategory, updateCurrentCategory } = useFetchPostList();

  return (
    <section
      className={`w-full flex flex-col px-4 pt-12 py-6 gap-y-6 lg:px-8 lg:pt-16 lg:pb-8`}
    >
      <Categories
        currentCategory={currentCategory}
        updateCategoryName={updateCurrentCategory}
      />
      {data?.length > 1 ? <PostList list={data} /> : <NoPost />}
    </section>
  );
};

export default PostListPage;
