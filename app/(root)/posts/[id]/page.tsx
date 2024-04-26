/* eslint-disable @next/next/no-img-element */
import DefaultBlock from "@/components/postBlocks/DefaultBlock";
import HeaderBlock from "@/components/postBlocks/HeaderBlock";
import ImageBlock from "@/components/postBlocks/ImageBlock";
import Keywords from "@/components/postBlocks/Keywords";
import TableOfContents from "@/components/postBlocks/TableOfContents";
import BasePage from "@/components/shared/BasePage";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { extractHeadersFromContents } from "@/helpers/post/post.helper";
import { getCommentsByPostId } from "@/lib/actions/comment.action";
import {
  getBlogPostById,
  getBlogPostsByCategory,
} from "@/lib/actions/post.action";
import CommentForm from "@/screens/posts/CommentForm";
import Comments from "@/screens/posts/Comments";
import PostsInSameCategory from "@/screens/posts/PostsInSameCategory";
import { CustomElement } from "@/types/edidor.type";
import { BlogPost } from "@/types/post.type";
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
  const relatedPostList = await getBlogPostsByCategory({
    category: post.category.name,
    limit: 5,
    page: 0,
  });

  const commentList = await getCommentsByPostId(post._id);

  const stringifiedContent = JSON.parse(post.content);

  const headers = extractHeadersFromContents(stringifiedContent);

  const filteredRelatedPostList = relatedPostList?.data.filter(
    (item: BlogPost) => item._id !== post._id
  );

  return (
    <BasePage className={`bg-white`}>
      <div className={`w-full flex flex-col pb-6 lg:py-12 lg:px-[144px]`}>
        <Breadcrumb />
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
              case "image":
                return (
                  <ImageBlock key={index} postTitle={post.title} {...element} />
                );
            }
          })}
        </section>

        <Keywords tagList={post.tags} />
      </div>

      {filteredRelatedPostList && filteredRelatedPostList.length > 0 && (
        <PostsInSameCategory
          category={post?.category}
          list={filteredRelatedPostList || []}
          currentPostId={post._id}
        />
      )}

      <Comments commentList={commentList || []} />

      <CommentForm postId={post._id} postSlug={post.slug} />
    </BasePage>
  );
};

export default Page;
