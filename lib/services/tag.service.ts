class TagClient {
  getTagList = async () => {
    return await fetch("/api/v1/tags").then((res) => res.json());
  };
}

const tagClient = new TagClient();

export default tagClient;
