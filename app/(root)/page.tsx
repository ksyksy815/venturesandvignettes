import BasePage from "@/components/shared/BasePage";
import Categories from "@/screens/main/Categories";
import Featured from "@/screens/main/Featured";
import Introduction from "@/screens/main/Introduction";
import Latest from "@/screens/main/Latest";
import Subscription from "@/screens/main/Subscription";

export default function Home() {
  return (
    <BasePage>
      <Featured />
      <Introduction />
      <Categories />
      <Latest />
      <Subscription />
    </BasePage>
  );
}
