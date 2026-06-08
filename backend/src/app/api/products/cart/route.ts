import { NextRequest, NextResponse } from "next/server";

import { PreviewProductSerializer } from "@/serializers";
import { Storage } from "@/storage";

export async function GET(request: NextRequest) {
  const ids =
    request.nextUrl.searchParams
      .get("ids")
      ?.split(",")
      .map((id) => id.trim())
      .filter(Boolean) ?? [];

  if (ids.length === 0) {
    return NextResponse.json([]);
  }

  const Model = await Storage.ProductModel;
  const serializer = new PreviewProductSerializer();
  const products = Model.retrieveMany(ids);

  return NextResponse.json(serializer.serialize(products));
}
