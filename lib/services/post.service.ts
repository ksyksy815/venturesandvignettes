class PostClient {
  getPostList = async ({
    categoryName = "",
    page = 0,
    keyword = "",
  }: {
    categoryName: string;
    page: number;
    keyword?: string;
  }) => {
    return await fetch(
      `/api/v1/posts?keyword=${keyword}&categoryName=${categoryName}&page=${page}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };
}

const postClient = new PostClient();

export default postClient;
