import BasePage from "@/components/shared/BasePage";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <div className="w-full flex flex-col gap-y-8">
        <div>tool bar</div>
        <input type="text" className="h-12 w-full px-4" />
        <div>editor</div>
        <div>further meta info</div>
        <div>save button</div>
      </div>
    </BasePage>
  );
};

export default Page;
