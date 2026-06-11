import type { Product as DetailedProduct } from "@/types";
import { Serializer } from "../base";

export class DetailedProductSerializer extends Serializer<DetailedProduct> {
  protected __performSerilization(product: DetailedProduct): DetailedProduct {
    return product;
  }
}
