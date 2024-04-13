"use client";

import useFetchPostList from "@/hooks/post/useFetchPostList";
import PostList from "../../components/shared/PostList";

const Latest = () => {
  const { data } = useFetchPostList();

  return (
    <section className={`w-full flex flex-col px-4 py-12 gap-y-6`}>
      <h2 className={`h2`}>Latest Posts</h2>
      <PostList list={data} />
    </section>
  );
};

export default Latest;
