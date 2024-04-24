import BasePage from "@/components/shared/BasePage";
import { getAllBlogPosts, getFeaturedPosts } from "@/lib/actions/post.action";
import { getAllTags } from "@/lib/actions/tag.action";
import FeaturedSlider from "@/screens/main/FeaturedSlider";
import Latest from "@/screens/main/Latest";
import TagSection from "@/screens/main/TagSection";

export default async function Home() {
  const featuredPostList = await getFeaturedPosts();
  const tagList = await getAllTags();
  const data = await getAllBlogPosts({
    limit: 6,
    page: 0,
  });

  return (
    <BasePage>
      <FeaturedSlider list={featuredPostList} />
      <Latest list={data?.data || []} />
      <TagSection list={tagList || []} />
    </BasePage>
  );
}