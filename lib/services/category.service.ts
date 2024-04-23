class CategoryClient {
  getUserList = async () => {
    return await fetch("/api/v1/categories").then((res) => res.json());
  };
}

const categoryClient = new CategoryClient();

export default categoryClient;
