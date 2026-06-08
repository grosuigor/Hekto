import type { Product as DetailedProduct } from "@/types";
import { Serializer } from "../base";

type ListedProduct = Pick<
  DetailedProduct,
  "id" | "name" | "price" | "wasPrice" | "description" | "rating" | "thumbnail"
>;

export class ListedProductSerializer extends Serializer<
  DetailedProduct,
  ListedProduct
> {
  protected __performSerilization(product: DetailedProduct): ListedProduct {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      wasPrice: product.wasPrice,
      description: product.description,
      rating: product.rating,
      thumbnail: product.thumbnail,
    };
  }
}
