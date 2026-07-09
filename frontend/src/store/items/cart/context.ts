import { CartItem } from "@/types";

import { createContexts } from "../context";
import { CartActionType, CartStoreState } from "./types";

export const [CartContext, CartDispatchContext] = createContexts<
  CartItem,
  CartStoreState,
  CartActionType
>();
