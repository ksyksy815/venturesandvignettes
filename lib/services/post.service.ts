class PostClient {
  getPostList = async () => {
    return await fetch("/api/v1/posts").then((res) => res.json());
  };
}

const postClient = new PostClient();

export default postClient;
