import PostCard from "@/components/shared/PostCard";

const PostList = () => {
  return (
    <div className={`flex flex-col w-full md:flex-wrap gap-4 md:flex-row`}>
      {[1, 2, 3, 4, 5, 6].map((post) => {
        return <PostCard key={post} />;
      })}
    </div>
  );
};

export default PostList;
