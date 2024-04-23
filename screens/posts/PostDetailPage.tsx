import { BlogPost } from "@/types/post.type";

type Props = {
  postDetail: BlogPost;
};
const PostDetailPage = ({ postDetail }: Props) => {
  return (
    <div className={`w-full flex flex-col`}>
      <h1 className={`h1`}>{postDetail.title}</h1>
      <p className={`text-lg`}>{postDetail.summary}</p>
      <div
        className={`w-full h-96 bg-cover bg-center`}
        style={{ backgroundImage: `url(${postDetail.image})` }}
      ></div>
      <div
        className={`w-full flex flex-col`}
        dangerouslySetInnerHTML={{ __html: postDetail.content }}
      ></div>
    </div>
  );
};

export default PostDetailPage;
