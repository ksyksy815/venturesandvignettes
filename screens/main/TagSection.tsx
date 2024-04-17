import { Tag } from "@/types/tag.type";
import Link from "next/link";

type Props = {
  list: Tag[];
};

const TagSection = async ({ list }: Props) => {
  return (
    <section className={`flex flex-wrap w-full px-5 py-[64px] gap-4 lg:px-8`}>
      {list?.map((tag) => {
        return (
          <Link key={tag._id} href={`/posts?tag=${tag.name}`} prefetch={false}>
            <div
              className={`h-10 grid place-content-center px-8 py-1 bg-white rounded-full text-lg font-medium hover:text-white hover:bg-vv-orange shadow-sm`}
            >
              {tag.name}
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default TagSection;
