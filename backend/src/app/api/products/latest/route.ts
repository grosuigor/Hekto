import { NextResponse } from "next/server";

import { Storage } from "@/storage";
import { PreviewProductSerializer } from "@/serializers";

import { LATEST_ITEMS_COUNT } from "../constants";

export async function GET() {
  const Model = await Storage.ProductModel;
  const serializer = new PreviewProductSerializer()
  const productLists = Model.listLatest(LATEST_ITEMS_COUNT)

  return NextResponse.json(productLists.map(products => serializer.serialize(products)))
}
