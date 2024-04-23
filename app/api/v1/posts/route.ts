import { getAllBlogPosts } from "@/lib/actions/post.action";
import { handleError } from "@/lib/utils";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET({ url }: NextRequest) {
  try {
    const hasQuery = url.indexOf("?") !== -1;

    if (hasQuery) {
      const query = url.split("?")[1];
      const params = new URLSearchParams(query);

      const categoryId = params.get("categoryId") || "";
      const page = params.get("page") || 0;

      const categories = await getAllBlogPosts({
        limit: 9,
        page: Number(page) ? Number(page) : 0,
        category: categoryId ? categoryId : undefined,
      });

      return new Response(JSON.stringify(categories));
    } else {
      const categories = await getAllBlogPosts({ limit: 9, page: 0 });
      return new Response(JSON.stringify(categories));
    }
  } catch (error) {
    handleError(error);
  }
}
