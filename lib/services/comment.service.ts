import { CreateCommentParams } from "@/types/comment.type";

class CommentClient {
  postComment = async (params: CreateCommentParams) => {
    return await fetch(`/api/v1/comments`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
}

const commentClient = new CommentClient();

export default commentClient;
