import { createComment } from "@/lib/actions/comment.action";
import { handleError } from "@/lib/utils";
import { CreateCommentParams } from "@/types/comment.type";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    const resp = await createComment(payload as CreateCommentParams);

    if (!resp) {
      return NextResponse.error();
    }

    return new Response(JSON.stringify(resp));
  } catch (error) {
    handleError(error);
    return NextResponse.error(); // Remove the empty object argument
  }
}
