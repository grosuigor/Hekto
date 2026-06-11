import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { success: false, message: "This url must receive [id] url kwarg" },
    { status: 400 },
  );
}
