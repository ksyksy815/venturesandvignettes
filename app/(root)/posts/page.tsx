import BasePage from "@/components/shared/BasePage";
import PostList from "@/screens/posts/PostList";

const Page = () => {
  return (
    <BasePage>
      <div className={`flex flex-col gap-y-4`}>
        <h1 className={`page-header`}>Posts</h1>
        <p className={`text-sm`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni
          atque non cumque aspernatur quas.
        </p>
      </div>

      <PostList />
    </BasePage>
  );
};

export default Page;
