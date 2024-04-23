"use client";

import useFetchPostList from "@/hooks/post/useFetchPostList";
import PostList from "../../components/shared/PostList";

const Latest = () => {
  const { postList } = useFetchPostList();

  return (
    <section className={`w-full flex flex-col px-5 py-12 gap-y-6 lg:px-8`}>
      <h2 className={`h2`}>Latest Posts</h2>
      <PostList list={postList} />
    </section>
  );
};

export default Latest;
