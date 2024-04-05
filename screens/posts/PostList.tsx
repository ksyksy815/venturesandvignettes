import PostCard from "@/components/shared/PostCard";

const PostList = () => {
  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-10`}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => {
        return <PostCard key={post} post={post} />;
      })}
    </div>
  );
};

export default PostList;
