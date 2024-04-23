import { getAllBlogPosts } from "@/lib/actions/post.action";
import { handleError } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const categories = await getAllBlogPosts({ limit: 9, page: 0 });

    return new Response(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
}
