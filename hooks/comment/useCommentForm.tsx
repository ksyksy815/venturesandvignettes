import { CommentFormData } from "@/utils/schema/comment.schema";
import { useEffect, useState } from "react";
import useAddComment from "./useAddComment";

type Props = {
  postId: string;
  slug: string;
};
const useCommentForm = ({ postId = "", slug = "" }: Props) => {
  const { handleAddComment, status } = useAddComment();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setShowModal(true);
    }
  }, [status]);

  const addComment = (data: CommentFormData) => {
    handleAddComment({
      user: data.name,
      email: data.email,
      content: data.content,
      url: data.url || "",
      postId,
      postNameSlug: slug,
    });
  };

  return {
    addComment,
    showModal,
    status,
  };
};

export default useCommentForm;
