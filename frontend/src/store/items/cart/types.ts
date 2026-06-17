import type { ItemsStoreState, ItemsActionType } from "../types";
import type { CartItem } from "@/types";

export type CartStoreState = ItemsStoreState<CartItem>;

export type CartActionType =
  | ItemsActionType<CartItem>
  | {
      type: "SET_QUANTITY";
      payload: CartItem;
    };
