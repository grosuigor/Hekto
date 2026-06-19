import type { WishlistStoreState, WishlistActionType } from "./types";
import { itemsReducer } from "../reducer";

export function wishlistReducer(
  state: WishlistStoreState,
  action: WishlistActionType,
): WishlistStoreState {
  return itemsReducer(state, action);
}
