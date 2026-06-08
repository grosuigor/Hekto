import { NextRequest, NextResponse } from "next/server";

import { SearchProductSerializer } from "@/serializers";
import { Storage } from "@/storage";

export async function GET(request: NextRequest) {
  const ProductModel = await Storage.ProductModel;
  const serializer = new SearchProductSerializer();

  const query = request.nextUrl.searchParams.get("query");
  const products = query ? ProductModel.search(query) : [];

  return NextResponse.json(serializer.serialize(products));
}
