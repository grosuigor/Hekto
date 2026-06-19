import { WishlistItem } from "@/types";
import { createContexts } from "../context";
import { WishlistActionType, WishlistStoreState } from "./types";

export const [WishlistContext, WishlistDispatchContext] = createContexts<
  WishlistItem,
  WishlistStoreState,
  WishlistActionType
>();
