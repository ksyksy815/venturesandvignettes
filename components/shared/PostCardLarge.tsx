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
    <Link href={`/posts/${slug}-${id}`}>
      <div
        className={`w-full flex flex-col flex-1 bg-white rounded-[32px] overflow-hidden shadow-base`}>
        <div className={`w-full h-[200px]`}>
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div
          className={`w-full flex flex-col justify-between px-5 py-5 gap-y-7 border-black`}>
          <div className={`w-full flex flex-col gap-y-7`}>
            <div className={`flex flex-col w-full gap-y-2`}>
              <p className={`text-base text-vv-darkGray`}>{category}</p>
              <h3
                className={`h2 hover:text-vv-orange line-clamp-3 lg:h-[84px]`}>
                {title}
              </h3>
            </div>
            <p
              className={`p1 hover:text-vv-orange line-clamp-3 opacity-80 lg:h-[72px]`}>
              {summary}
            </p>
          </div>

          <button
            type={"button"}
            className={`mr-1 text-vv-darkGray text-base flex-center self-end hover:text-vv-black hover:underline`}>
            READ MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCardLarge;
