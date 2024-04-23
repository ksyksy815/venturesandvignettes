import { BlogPost } from "@/types/post.type";
import Link from "next/link";

type Props = {
  tagList: BlogPost["tags"];
};
const Keywords = ({ tagList }: Props) => {
  return (
    <ul
      className={`editor-element-padding flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-vv-black pt-12`}
    >
      {tagList.map((tag: { _id: string; name: string }) => {
        const { _id, name } = tag;

        return (
          <li key={_id} className={`hover:text-vv-orange`}>
            <Link href={`/posts?keyword=${name}`}>{`#${name}`}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Keywords;
