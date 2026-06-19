import { type Dispatch } from "react";
import { useItemsContext, useItemsDispatchContext } from "../hooks";
import { WishlistContext, WishlistDispatchContext } from "./context";
import type { WishlistActionType, WishlistStoreState } from "./types";

export function useWishlistContext(): WishlistStoreState {
  const context = useItemsContext(WishlistContext, "Wishlist");

  return context;
}

export function useWishlistDispatchContext(): Dispatch<WishlistActionType> {
  const context = useItemsDispatchContext(
    WishlistDispatchContext,
    "Wishlist dispatch",
  );

  return context;
}
