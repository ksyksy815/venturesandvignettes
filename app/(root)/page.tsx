import BasePage from "@/components/shared/BasePage";
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
