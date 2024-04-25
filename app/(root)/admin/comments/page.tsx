import BasePage from "@/components/shared/BasePage";
import { getAllComments } from "@/lib/actions/comment.action";
import CommentList from "@/screens/admin/comment/CommentList";

const Page = async () => {
  const commentList = await getAllComments({ limit: 20, page: 0 });
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className={`h1`}>Comment Management</h1>
      <CommentList list={commentList} />
    </BasePage>
  );
};

export default Page;
