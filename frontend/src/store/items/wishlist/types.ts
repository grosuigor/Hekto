import type { WishlistItem } from "@/types";
import type { ItemsActionType, ItemsStoreState } from "../types";

export type WishlistStoreState = ItemsStoreState<WishlistItem>;

export type WishlistActionType =
  | ItemsActionType<WishlistItem>
