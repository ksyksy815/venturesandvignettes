export type CreateCommentParams = {
  user: string;
  postId: string;
  comment: {
    content: string;
    password: string;
  };
  path: string;
};

export type Comment = {
  _id: string;
  content: string;
  url?: string;
  user: string;
  password: string;
  createdAt: Date;
  isAccepted: boolean;
  postId: string;
};
