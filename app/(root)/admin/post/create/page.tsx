import MainEditor from "@/components/editor/MainEditor";
import BasePage from "@/components/shared/BasePage";

const Page = () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <div className="w-full flex flex-col gap-y-8">
        <div>tool bar</div>
        <input type="text" className="h-12 w-full px-4" />
        <MainEditor />
        <div>further meta info</div>
        <div>save button</div>
      </div>
    </BasePage>
  );
};

export default Page;
