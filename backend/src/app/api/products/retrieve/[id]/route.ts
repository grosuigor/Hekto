import { NextRequest, NextResponse } from "next/server";

import {
  DetailedProductSerializer,
  PreviewProductSerializer,
} from "@/serializers";
import { Storage } from "@/storage";
import { RELATED_PRODUCTS_COUNT } from "../../constants";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const Model = await Storage.ProductModel;
  const { id } = await params;

  const product = Model.retrieve(id);

  if (!product) {
    return NextResponse.json(
      { success: false, message: `Product with id ${id} doesn't exist` },
      { status: 404 },
    );
  }

  const detailedSerializer = new DetailedProductSerializer();
  const previewSerializer = new PreviewProductSerializer();
  const relatedProducts = Model.listRelated(id, RELATED_PRODUCTS_COUNT);

  return NextResponse.json({
    ...detailedSerializer.serialize(product),
    relatedProducts: previewSerializer.serialize(relatedProducts),
  });
}
