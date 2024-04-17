class UserClient {
  getUserList = async () => {
    return await fetch("/api/v1/categories").then((res) => res.json());
  };
}

const userClient = new UserClient();

export default userClient;
