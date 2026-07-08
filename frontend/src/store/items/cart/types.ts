import type { CartItem } from "@/types";

import type { ItemsActionType,ItemsStoreState } from "../types";

export type CartStoreState = ItemsStoreState<CartItem>;

export type CartActionType =
  | ItemsActionType<CartItem>
  | {
      type: "SET_QUANTITY";
      payload: CartItem;
    };
