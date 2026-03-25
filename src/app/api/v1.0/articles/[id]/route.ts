import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } })
{
  const articleId = params.id;

  const article = {
    id: articleId,
    content: `ID ${articleId}`
  };

  const response = NextResponse.json(article);
  return response;
}