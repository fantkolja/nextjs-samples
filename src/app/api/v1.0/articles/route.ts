import { NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
 // if(!request.headers.get("Authorization")){
 //   return NextResponse.json({message: "Not authorized"},{status: 403});
 // }
  const articles = [{id: 2, content: "b"},{id: 1, content: "a"},{id: 3, content: "c"}];
  const { searchParams } = new URL(request.url);
  const sort = searchParams.get('sort');

  if (sort === 'asc' || sort === 'desc') {
    articles.sort((a, b) => {
      return sort === 'asc'
        ? a.content.localeCompare(b.content)
        : b.content.localeCompare(a.content);
    });
  }
  const response = NextResponse.json(articles);
  const token = request.cookies.get('token')?.value;
  const SECRET_TOKEN = '123';

  if (token === SECRET_TOKEN) {
    response.cookies.set('X-Logged-In', 'true');
  }
    response.cookies.set('I_love_next', 'false');
    response.headers.set("X-NEXTJS","lame")
  return response;
};
export async function POST(request: NextRequest) {
  const article = {id: 1, content: "json"};
  const response = NextResponse.json({article},{status:201});
  return response;
};