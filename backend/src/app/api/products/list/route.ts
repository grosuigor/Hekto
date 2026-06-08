import { NextRequest, NextResponse } from "next/server";

import { ListedProductSerializer } from "@/serializers";
import { Storage } from "@/storage";
import { parseUrlParams } from "./urlParser";

export async function GET(request: NextRequest) {
  const ProductModel = await Storage.ProductModel;
  const serializer = new ListedProductSerializer();

  const { products, total } = ProductModel.listWithTotal(
    ...parseUrlParams(request),
  );

  return NextResponse.json({
    products: serializer.serialize(products),
    total: total,
  });
}
