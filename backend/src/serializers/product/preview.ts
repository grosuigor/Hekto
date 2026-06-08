import type { Product as DetailedProduct } from "@/types";
import { Serializer } from "../base";

export type PreviewProduct = Pick<
  DetailedProduct,
  "id" | "name" | "price" | "wasPrice" | "isSale" | "code" | "thumbnail"
>;

export class PreviewProductSerializer extends Serializer<
  DetailedProduct,
  PreviewProduct
> {
  protected __performSerilization(product: DetailedProduct): PreviewProduct {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      wasPrice: product.wasPrice,
      isSale: product.isSale,
      code: product.code,
      thumbnail: product.thumbnail,
    };
  }
}
