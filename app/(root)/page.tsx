import BasePage from "@/components/shared/BasePage";
import { getFeaturedPosts } from "@/lib/actions/post.action";
import { getAllTags } from "@/lib/actions/tag.action";
import FeaturedSlider from "@/screens/main/FeaturedSlider";
import Latest from "@/screens/main/Latest";
import TagSection from "@/screens/main/TagSection";

export default async function Home() {
  const featuredPostList = await getFeaturedPosts();
  const tagList = await getAllTags();

  return (
    <BasePage>
      <FeaturedSlider list={featuredPostList} />
      <Latest />
      <TagSection list={tagList || []} />
    </BasePage>
  );
}