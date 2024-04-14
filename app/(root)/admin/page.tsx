import BasePage from "@/components/shared/BasePage";
import AdminNavItems from "@/screens/admin/AdminNavItems";

const Page = () => {
  return (
    <BasePage className={`px-6 py-12 gap-y-6 lg:px-8 lg:py-16 lg:gap-y-8`}>
      <h1 className={`h1`}>Admin Main</h1>
      <AdminNavItems />
    </BasePage>
  );
};

export default Page;
