import type {
  DetailedProduct,
  ListedProductWithTotal,
  PreviewProduct,
  SearchResult,
} from "@/types";
import { request } from "./request";

export function listProducts(query: URLSearchParams) {
  return request<ListedProductWithTotal>(`/products/list?${query}`);
}

export function retrieveProduct(id: string) {
  return request<DetailedProduct>(`/products/retrieve/${id}`);
}

export function listProductsByIds(ids: string[]) {
  const params = new URLSearchParams({
    ids: ids.join(","),
  });

  return request<PreviewProduct[]>(`/products/cart?${params.toString()}`);
}

export function listFeaturedProducts() {
  return request<PreviewProduct[]>("/products/featured");
}

export function listLatestProducts() {
  return request<PreviewProduct[][]>("/products/latest");
}

export function listTrendingProducts() {
  return request<PreviewProduct[]>("/products/trending");
}

export function searchProducts(searchQuery: string, init?: RequestInit) {
  return request<SearchResult[]>(
    `/products/search?query=${encodeURIComponent(searchQuery)}`,
    init,
  );
}
