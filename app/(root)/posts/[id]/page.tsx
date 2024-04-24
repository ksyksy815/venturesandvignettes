/* eslint-disable @next/next/no-img-element */
import DefaultBlock from "@/components/postBlocks/DefaultBlock";
import HeaderBlock from "@/components/postBlocks/HeaderBlock";
import Keywords from "@/components/postBlocks/Keywords";
import TableOfContents, {
  TableOfContentsProps,
} from "@/components/postBlocks/TableOfContents";
import BasePage from "@/components/shared/BasePage";
import { getBlogPostById } from "@/lib/actions/post.action";
import CommentForm from "@/screens/posts/CommentForm";
import Comments from "@/screens/posts/Comments";
import PostsInSameCategory from "@/screens/posts/PostsInSameCategory";
import { CustomElement } from "@/types/edidor.type";
import dayjs from "dayjs";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params: { id } }: Props) => {
  if (!id) {
    throw new Error("Please provide a post id");
  }

  const postId =
    id.lastIndexOf("-") > 0 ? id.slice(id.lastIndexOf("-") + 1) : id;
  const post = await getBlogPostById(postId);

  const stringifiedContent = JSON.parse(post.content);

  const headers: TableOfContentsProps["headers"] = stringifiedContent.reduce(
    (
      acc: TableOfContentsProps["headers"],
      cur: CustomElement,
      index: number
    ) => {
      if (cur.type.includes("header")) {
        const newHeader = {
          ...cur,
          index,
        };

        return [...acc, newHeader];
      }
      return acc;
    },
    []
  );

  return (
    <BasePage className={`bg-white`}>
      <div className={`w-full flex flex-col pb-6 lg:py-12 lg:px-[144px]`}>
        <section>
          <img
            src={post.image}
            alt={post.title}
            className={`w-full h-[400px] object-cover`}
          />
        </section>

        <section
          className={`flex flex-col w-full px-3 py-12 gap-y-12 lg:px-0 lg:py-[52px]`}
        >
          <div className={`w-full flex flex-col gap-y-3`}>
            <h1 className={`h1`}>{post.title}</h1>
            <div className={`text-base text-vv-darkGray font-medium`}>
              {`${dayjs(post.createdAt).format("MMMM DD, YYYY")} by ${
                post.author.username
              }`}
            </div>
          </div>

          <p className={`text-[20px] text-vv-darkGray italic`}>
            {post.summary}
          </p>
        </section>

        <TableOfContents headers={headers} />

        <section>
          {stringifiedContent.map((element: CustomElement, index: number) => {
            const { type, children } = element;

            switch (type) {
              case "paragraph":
                return <DefaultBlock key={index} {...element} />;
              case "headerOne":
              case "headerTwo":
              case "headerThree":
                return <HeaderBlock key={index} {...element} index={index} />;
            }
          })}
        </section>

        <Keywords tagList={post.tags} />
      </div>

      <PostsInSameCategory category={post?.category} />

      <Comments commentList={post.comments || []} />

      <CommentForm postId={post._id} />
    </BasePage>
  );
};

export default Page;
