class PostClient {
  getPostList = async ({
    categoryId = "",
    page = 0,
  }: {
    categoryId: string;
    page: number;
  }) => {
    return await fetch(`/api/v1/posts?categoryId=${categoryId}&page=${page}`, {
      method: "GET",
    }).then((res) => res.json());
  };
}

const postClient = new PostClient();

export default postClient;
