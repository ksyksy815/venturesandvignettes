import {
  getAllBlogPosts,
  getBlogPostsByCategory,
} from "@/lib/actions/post.action";
import { handleError } from "@/lib/utils";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET({ url }: NextRequest) {
  const query = url.split("?")[1];
  const params = new URLSearchParams(query);

  try {
    if (params.has(`categoryName`) && params.get("categoryName") !== "") {
      const categoryName = params.get("categoryName") || "";
      const page = params.get("page") || 0;

      const postList = await getBlogPostsByCategory({
        limit: 9,
        page: Number(page) ? Number(page) : 0,
        category: categoryName,
      });

      return new Response(JSON.stringify(postList));
    } else {
      const page = params.get("page") || 0;
      const keyword = params.get("keyword") || "";

      const postList = await getAllBlogPosts({
        limit: 9,
        page: Number(page) ? Number(page) : 0,
        keyword,
      });

      return new Response(JSON.stringify(postList));
    }
  } catch (error) {
    handleError(error);
  }
}
