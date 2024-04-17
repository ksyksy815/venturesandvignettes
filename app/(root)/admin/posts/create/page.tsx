import BasePage from "@/components/shared/BasePage";
import PostForm from "@/screens/admin/post/PostForm";

const Page = () => {
  return (
    <BasePage>
      <div className="w-full flex flex-col px-3 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8">
        <div className={`w-full flex flex-col`}>
          <PostForm type={"CREATE"} />
        </div>
      </div>
    </BasePage>
  );
};

export default Page;
