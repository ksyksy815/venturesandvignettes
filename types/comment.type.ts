export type CreateCommentParams = {
  user: string;
  blogPostId: string;
  comment: {
    content: string;
    password: string;
  };
  path: string;
};

export type Comment = {
  _id: string;
  content: string;
  user: string;
  password: string;
  createdAt: Date;
  isAccepted: boolean;
  blogPostId: string;
};
