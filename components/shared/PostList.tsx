import PostCardLarge from "@/components/shared/PostCardLarge";

type Props = {
  list: any[];
};
const PostList = ({ list }: Props) => {
  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8`}>
      {list.map((post) => (
        <div key={post.id} className={`w-full`}>
          <PostCardLarge key={post.id} {...post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
