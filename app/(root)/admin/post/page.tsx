import BasePage from "@/components/shared/BasePage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className="h1">Post List</h1>

      <Link href={`/admin/post/create`}>
        <Button type={"button"}>Write</Button>
      </Link>
      <p>Post list goes here</p>
    </BasePage>
  );
};

export default Page;
