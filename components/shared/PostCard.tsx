import Link from "next/link";

type Props = {
  post: any;
};

const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/posts/${post}`}>
      <div
        className={`flex flex-col h-[350px] w-full gap-y-4 lg:max-w-[314px]`}
      >
        <div className={`h-[175px] flex-center flex-1 border`}>img</div>
        <div className={`flex flex-col gap-y-2`}>
          <h2 className={`font-semibold`}>Blog title</h2>
          <p className={`line-clamp-3`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab enim
            provident dicta odit cum in voluptas nobis dolorum dolore ullam.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
