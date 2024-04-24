import { Category } from "@/types/category.type";
import Link from "next/link";

type Props = {
  category: Omit<Category, "description">;
};

const PostsInSameCategory = ({ category }: Props) => {
  const { _id, name } = category;

  return (
    <section
      className={`flex flex-col w-full gap-y-4 bg-vv-lightGray px-4 py-8 lg:gap-y-6 lg:p-12`}
    >
      <h3
        className={`text-[20px] lg:text-2xl font-bold`}
      >{`Posts on ${name}`}</h3>

      <ul className={`flex flex-col gap-y-6 lg:gap-y-3`}>
        <li>
          <Link
            href={"/"}
            className={`flex flex-col w-full gap-y-2 hover:text-vv-orange lg:flex-row lg:justify-between lg:items-center`}
          >
            <p
              className={`text-lg lg:text-[20px]`}
            >{`Whispering Woods: Discovering the Serenity of Hidden Forest Retreats`}</p>
            <span className={`text-sm lg:text-lg`}>{`April 9, 2023`}</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className={`flex flex-col w-full gap-y-2 hover:text-vv-orange lg:flex-row lg:justify-between lg:items-center`}
          >
            <p
              className={`text-lg lg:text-[20px]`}
            >{`Mountain Majesty: A Journey Through the World’s Most Breathtaking Peaks`}</p>
            <span className={`text-sm lg:text-lg`}>{`April 3, 2023`}</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className={`flex flex-col w-full gap-y-2 hover:text-vv-orange lg:flex-row lg:justify-between lg:items-center`}
          >
            <p
              className={`text-lg lg:text-[20px]`}
            >{`Island Eden: Exploring Pristine Beaches and Untouched Coral Reefs`}</p>
            <span className={`text-sm lg:text-lg`}>{`March 23, 2023`}</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default PostsInSameCategory;
