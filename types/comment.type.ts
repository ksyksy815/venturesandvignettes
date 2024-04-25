export type CreateCommentParams = {
  user: string;
  email: string;
  postId: string;
  content: string;
  url?: string;
  path: string;
};

export type Comment = {
  _id: string;
  user: string;
  email: string;
  postId: string;
  content: string;
  createdAt: Date;
  isAccepted: boolean;
  url?: string;
};
