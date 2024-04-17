import BasePage from "@/components/shared/BasePage";
import { getAllTags } from "@/lib/actions/tag.action";
import FeaturedSlider from "@/screens/main/FeaturedSlider";
import Latest from "@/screens/main/Latest";
import TagSection from "@/screens/main/TagSection";

export default async function Home() {
  const tagList = await getAllTags();

  return (
    <BasePage>
      <FeaturedSlider />
      <Latest />
      <TagSection list={tagList || []} />
    </BasePage>
  );
}
