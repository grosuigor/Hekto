import type { DetailedProduct } from "./product";

export type SearchProduct = Pick<
  DetailedProduct,
  "id" | "brand" | "category" | "name" | "price" | "wasPrice" | "thumbnail"
>;

export type SearchResult = {
  item: SearchProduct;
  key: "brand" | "category" | "name";
};
