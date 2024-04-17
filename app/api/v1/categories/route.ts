import { getAllCategories } from "@/lib/actions/category.action";
import { handleError } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const categories = await getAllCategories();

    return new Response(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
}
