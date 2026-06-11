import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "Filters",
    routes: [
      {
        route: "/list",
        desc: "lists all filters",
      },
    ],
  });
}
