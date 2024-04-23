export type CreateBlogPostParams = {
  userId: string;
  blogPost: {
    title: string;
    slug: string;
    summary: string;
    content: string;
    categoryId: string;
    tags: string[];
    isDisplayed: boolean;
    image: string;
    thumbnailImage?: string;
  };
  path: string;
};

export type GetAllBlogPostsParams = {
  limit: number;
  page: number;
  keyword?: string;
  category?: string;
};

export type GetBlogPostsByTagParams = {
  tag: string;
  limit: number;
  page: number;
};

export type GetBlogPostsByCategory = {
  category: string;
  limit: number;
  page: number;
};

export type UpdateBlogPostParams = {
  blogPostId: string;
  blogPost: {
    _id: string;
  } & CreateBlogPostParams["blogPost"];
  path: string;
};

export type DeleteBlogPostParams = {
  blogPostId: string;
  path: string;
};

export type BlogPost = {
  _id: string;
  author: { _id: string; userName: string };
  title: string;
  slug: string; // ex) this-is-a-blog-post
  summary: string;
  content: string;
  category: { _id: string; name: string };
  tags: { _id: string; name: string }[];
  createdAt: Date;
  updatedAt: Date;
  isDisplayed: boolean;
  comments: Comment[];
  image: string; // 16:9 ratio
  thumbnailImage: string; // 16:9 ratio. a smaller version of the cover image in the content
};
