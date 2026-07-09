import type { CartItem, WishlistItem } from "@/types";

import { BaseStorage } from "./base";
import { STORAGE_KEYS } from "./keys";

export class ItemsStorage extends BaseStorage {
  async getCartItems(): Promise<CartItem[] | null> {
    return this.storage.get<CartItem[]>(STORAGE_KEYS.cart);
  }

  async setCartItems(items: CartItem[]): Promise<void> {
    await this.storage.set(STORAGE_KEYS.cart, items);
  }

  async getWishlistItems(): Promise<WishlistItem[] | null> {
    return this.storage.get<WishlistItem[]>(STORAGE_KEYS.wishlist);
  }

  async setWishlistItems(items: WishlistItem[]): Promise<void> {
    await this.storage.set(STORAGE_KEYS.wishlist, items);
  }

  async getItems(type: "cart" | "wishlist"): Promise<CartItem[] | WishlistItem[] | null> {
    if (type === "cart") {
      return this.getCartItems();
    }

    return this.getWishlistItems();
  }

  async setItems<T extends "cart" | "wishlist">(type: T, items: CartItem[] | WishlistItem[]): Promise<void> {
    if (type === "cart") {
      return this.setCartItems(items as CartItem[]);
    }

    return this.setWishlistItems(items);
  }
}
