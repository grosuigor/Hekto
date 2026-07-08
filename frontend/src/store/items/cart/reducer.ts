import { itemsReducer } from "../reducer";
import type { CartActionType,CartStoreState } from "./types";

export function cartReducer(
  state: CartStoreState,
  action: CartActionType,
): CartStoreState {
  switch (action.type) {
    case "SET_QUANTITY": {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.productId !== productId),
        };
      }

      const index = state.items.findIndex(
        (item) => item.productId === productId,
      );

      if (index === -1) {
        return {
          ...state,
          items: [...state.items, { productId, quantity }],
        };
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      };
    }

    default:
      return itemsReducer(state, action);
  }
}
