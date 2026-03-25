import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const id = formData.get('id');
    const content = formData.get('content');
    const article = {
      id: id,
      content: content,
    };
    const response = NextResponse.json(article, { status: 201 });
    return response;
}