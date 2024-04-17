import BasePage from "@/components/shared/BasePage";
import CategoryList from "@/screens/categories/CategoryList";

const page = () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className="h1">Categories</h1>
      <CategoryList />
    </BasePage>
  );
};

export default page;
