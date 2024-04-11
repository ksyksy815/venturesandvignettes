"use client";

import PostCardLarge from "@/components/shared/PostCardLarge";
import useFetchPostList from "@/hooks/post/useFetchPostList";

const PostList = () => {
  const { data } = useFetchPostList();

  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-4`}>
      {data.map((post) => (
        <div key={post.id} className={`w-full`}>
          <PostCardLarge key={post.id} {...post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
