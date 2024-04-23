"use client";

import PostList from "@/components/shared/PostList";
import PostListSkeleton from "@/components/shared/PostListSkeleton";
import useFetchPostList from "@/hooks/post/useFetchPostList";
import { Suspense } from "react";

const Latest = () => {
  const { postList } = useFetchPostList();

  return (
    <section className={`w-full flex flex-col px-5 py-12 gap-y-6 lg:px-8`}>
      <h2 className={`h2`}>Latest Posts</h2>

      <Suspense fallback={<PostListSkeleton />}>
        <PostList list={postList} />
      </Suspense>
    </section>
  );
};

export default Latest;
