import { NextResponse } from "next/server";

export async function GET() {
  console.log(process.env.SECRET_WORD);
  return NextResponse.json({});
}
