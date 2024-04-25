import queryKeys from "@/constants/queryKeys";
import commentClient from "@/lib/services/comment.service";
import { CreateCommentParams } from "@/types/comment.type";
import { useMutation } from "@tanstack/react-query";

const useAddComment = () => {
  const { mutate, status } = useMutation({
    mutationKey: [queryKeys.comment.add],
    mutationFn: commentClient.postComment,
  });

  const handleAddComment = ({
    postNameSlug,
    user,
    email,
    postId,
    content,
    url,
  }: { postNameSlug: string } & Omit<CreateCommentParams, "path">) => {
    mutate({
      user,
      postId,
      email,
      content,
      url,
      path: `/posts/${postNameSlug}-${postId}`,
    });
  };

  return {
    handleAddComment,
    status,
  };
};

export default useAddComment;
