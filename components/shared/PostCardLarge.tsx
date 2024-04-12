/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  id: string;
  author: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  isDisplayed: boolean;
  comments: any[];
  image: string;
  thumbnailImage: string;
};

const PostCardLarge = ({
  id,
  title,
  slug,
  summary,
  content,
  category,
  tags,
  createdAt,
  updatedAt,
  isDisplayed,
  comments,
  image,
  thumbnailImage,
}: Props) => {
  return (
    <Link
      href={`/posts/${slug}-${id}`}
      className={`w-full flex flex-col border border-black flex-1 bg-white rounded-lg overflow-hidden`}
    >
      <div className={`w-full h-[200px]`}>
        <img src={image} alt={title} className={`w-full h-full object-cover`} />
      </div>
      <div
        className={`md:h-[397px] w-full flex flex-col px-4 py-8 gap-y-8 border-t border-black`}
      >
        <div className={`flex flex-col w-full gap-y-1`}>
          <p className={`p2`}>{category}</p>
          <h3 className={`h3 hover:text-vv-orange line-clamp-3`}>{title}</h3>
        </div>
        <p
          className={`h-[84px] md:h-auto p1 hover:text-vv-orange line-clamp-3`}
        >
          {summary}
        </p>
        <button
          type={"button"}
          className={`flex-center gap-x-2 self-end hover:text-vv-orange`}
        >
          READ MORE
          <FiArrowRight />
        </button>
      </div>
    </Link>
  );
};

export default PostCardLarge;
