import BasePage from "@/components/shared/BasePage";
import TopButton from "@/components/shared/TopButton";
import FeaturedSlider from "@/screens/main/FeaturedSlider";
import Latest from "@/screens/main/Latest";

export default function Home() {
  return (
    <BasePage>
      <FeaturedSlider />
      <Latest />
    </BasePage>
  );
}
