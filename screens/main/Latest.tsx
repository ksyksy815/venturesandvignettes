import PostList from "./PostList";

const Latest = () => {
  return (
    <section className={`w-full flex flex-col px-4 py-12 gap-y-6`}>
      <h2 className={`h2`}>Latest Posts</h2>
      <PostList />
    </section>
  );
};

export default Latest;
