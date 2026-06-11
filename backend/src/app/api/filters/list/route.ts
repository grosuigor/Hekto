import { NextResponse } from "next/server";

import { FilterSerializer } from "@/serializers";
import { Storage } from "@/storage";
import type { Product } from "@/types";

export async function GET() {
  const Model = await Storage.FilterModel;
  const serializer = new FilterSerializer<Product>();
  const filters = Model.list();
  return NextResponse.json(serializer.serialize(filters));
}
