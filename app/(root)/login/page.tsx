import BasePage from "@/components/shared/BasePage";
import LoginPage from "@/screens/login/LoginPage";
import { headers } from "next/headers";

const Page = () => {
  return (
    <BasePage>
      <LoginPage />
    </BasePage>
  );
};

export default Page;
