import type { Product as DetailedProduct, SearchResult } from "@/types";
import { Serializer } from "../base";

export type SearchProduct = Pick<
  DetailedProduct,
  "id" | "brand" | "category" | "name" | "price" | "wasPrice" | "thumbnail"
>;

export class SearchProductSerializer extends Serializer<
  SearchResult<DetailedProduct>,
  SearchResult<SearchProduct>
> {
  protected __performSerilization(
    result: SearchResult<DetailedProduct>,
  ): SearchResult<SearchProduct> {
    return {
      item: {
        id: result.item.id,
        brand: result.item.brand,
        category: result.item.category,
        name: result.item.name,
        price: result.item.price,
        wasPrice: result.item.wasPrice,
        thumbnail: result.item.thumbnail,
      },
      key: result.key as keyof SearchProduct
    };
  }
}
