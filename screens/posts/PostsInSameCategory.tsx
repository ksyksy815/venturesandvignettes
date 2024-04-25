import { Category } from "@/types/category.type";
import { BlogPost } from "@/types/post.type";
import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  category: Omit<Category, "description">;
  list: BlogPost[];
  currentPostId: string;
};

const PostsInSameCategory = ({ category, list = [], currentPostId }: Props) => {
  const { name } = category;

  return (
    <section
      className={`flex flex-col w-full gap-y-4 bg-vv-lightGray px-4 py-8 lg:gap-y-6 lg:p-12`}
    >
      <h3
        className={`text-[20px] lg:text-2xl font-bold`}
      >{`Posts on ${name}`}</h3>

      <ul className={`flex flex-col gap-y-6 lg:gap-y-3`}>
        {list?.map((post) => {
          const { _id, title, createdAt, slug } = post;

          return (
            <li key={_id}>
              <Link
                href={`/posts/${slug}-${_id}`}
                className={`flex flex-col w-full gap-x-4 gap-y-2 hover:text-vv-orange lg:flex-row lg:justify-between lg:items-center`}
              >
                <p className={`text-lg lg:text-[20px] line-clamp-1`}>{title}</p>
                <span className={`text-sm lg:text-lg whitespace-nowrap`}>
                  {dayjs(createdAt).format("MMMM DD, YYYY")}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PostsInSameCategory;
