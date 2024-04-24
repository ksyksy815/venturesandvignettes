import BasePage from "@/components/shared/BasePage";
import PostListPage from "@/screens/posts/PostListPage";
import { Suspense } from "react";

const Page = () => {
  return (
    <BasePage>
      <Suspense>
        <PostListPage />
      </Suspense>
    </BasePage>
  );
};

export default Page;
