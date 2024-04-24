class PostClient {
  getPostList = async ({
    categoryId = "",
    page = 0,
    keyword = "",
  }: {
    categoryId: string;
    page: number;
    keyword?: string;
  }) => {
    return await fetch(
      `/api/v1/posts?keyword=${keyword}&categoryId=${categoryId}&page=${page}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };
}

const postClient = new PostClient();

export default postClient;
