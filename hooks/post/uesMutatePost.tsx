import { createBlogPost } from "@/lib/actions/post.action";
import { CreateBlogPostParams } from "@/types/post.type";
import { useMutation } from "@tanstack/react-query";

const useMutatePost = () => {
  const { mutate, status } = useMutation({
    mutationKey: [],
    mutationFn: createBlogPost,
  });

  const makeNewPost = (params: CreateBlogPostParams) => {
    mutate(params);
  };

  return {
    makeNewPost,
    status,
  };
};

export default useMutatePost;
