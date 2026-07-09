import { type Dispatch } from "react";

import { useItemsContext, useItemsDispatchContext } from "../hooks";
import { CartContext, CartDispatchContext } from "./context";
import type { CartActionType, CartStoreState } from "./types";

export function useCartContext(): CartStoreState {
  const context = useItemsContext(CartContext, "Cart");

  return context;
}

export function useCartDispatchContext(): Dispatch<CartActionType> {
  const context = useItemsDispatchContext(CartDispatchContext, "Cart dispatch");

  return context;
}
