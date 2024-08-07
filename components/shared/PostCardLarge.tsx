/* eslint-disable @next/next/no-img-element */
import { BlogPost } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";

type Props = BlogPost;

const PostCardLarge = ({
  _id,
  title,
  slug,
  summary,
  category,
  image,
}: Props) => {
  return (
    <Link href={`/posts/${slug}-${_id}`}>
      <div
        className={`w-full flex flex-col flex-1 bg-white rounded-[32px] overflow-hidden shadow-base`}
      >
        <div className={`relative w-full h-[200px]`}>
          <Image
            src={image}
            alt={title}
            fill={true}
            sizes={`(max-width:767px) 100vw, 298.66px`}
            priority={false}
            className={`w-full h-full object-cover`}
          />
        </div>
        <div
          className={`w-full flex flex-col justify-between px-5 py-5 gap-y-7 border-black`}
        >
          <div className={`w-full flex flex-col gap-y-7`}>
            <div className={`flex flex-col w-full gap-y-2`}>
              <p className={`text-base text-vv-darkGray`}>
                {category.name || ""}
              </p>
              <h3
                className={`text-2xl font-medium leading-7 hover:text-vv-orange line-clamp-3 lg:h-[84px]`}
              >
                {title || ""}
              </h3>
            </div>
            <p
              className={`p1 hover:text-vv-orange line-clamp-3 opacity-80 lg:h-[72px]`}
            >
              {summary || ""}
            </p>
          </div>

          <button
            type={"button"}
            className={`mr-1 text-vv-darkGray text-base flex-center self-end hover:text-vv-black hover:underline`}
          >
            READ MORE
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCardLarge;
