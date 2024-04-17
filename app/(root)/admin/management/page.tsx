import BasePage from "@/components/shared/BasePage";
import CategoryList from "@/screens/admin/management/CategoryList";

const Page = async () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className="h1">Site management</h1>

      <CategoryList />

      <section className={`w-full flex flex-col gap-y-4`}>
        <h2 className={`h2`}>Tags</h2>
      </section>
    </BasePage>
  );
};

export default Page;
