import PostCardLarge from "@/components/shared/PostCardLarge";
import { BlogPost } from "@/types/post.type";

type Props = {
  list: BlogPost[];
};
const PostList = ({ list }: Props) => {
  return (
    <div className={`w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8`}>
      {list.map((post) => (
        <PostCardLarge key={post._id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
