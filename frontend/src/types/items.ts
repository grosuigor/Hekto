import type { PreviewProduct } from "./product";

export type StoredItem = {
  productId: string;
}

export type CartItem = StoredItem & {
  quantity: number;
};

export type WishlistItem = StoredItem

export type StoredProduct = PreviewProduct

export type CartProduct = StoredProduct & Omit<CartItem, 'productId'>

export type WishlistProduct = StoredProduct