import { NextResponse } from "next/server";

import { Storage } from "@/storage";
import { PreviewProductSerializer } from "@/serializers";

import { FEATURED_ITEMS_COUNT } from "../constants";

export async function GET() {
  const Model = await Storage.ProductModel;
  const serializer = new PreviewProductSerializer()
  const products = Model.listFeatured(FEATURED_ITEMS_COUNT)

  return NextResponse.json(serializer.serialize(products))
}
