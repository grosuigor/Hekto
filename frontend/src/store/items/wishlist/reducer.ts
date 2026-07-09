import { itemsReducer } from "../reducer";
import type { WishlistActionType,WishlistStoreState } from "./types";

export function wishlistReducer(
  state: WishlistStoreState,
  action: WishlistActionType,
): WishlistStoreState {
  return itemsReducer(state, action);
}
