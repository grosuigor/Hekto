import type { StoredItem } from "@/types";

import type { ItemsActionType,ItemsStoreState } from "./types";

export function itemsReducer<
  Item extends StoredItem,
  StoreType extends ItemsStoreState<Item>,
  ActionType extends ItemsActionType<Item>,
>(state: StoreType, action: ActionType): StoreType {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        items: action.payload,
      };

    case "ADD_ITEM": {
      const { productId } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId,
      );

      if (index === -1) {
        return {
          ...state,
          items: [...state.items, { productId, quantity: 1 }],
        };
      }

      return state;
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.productId !== action.payload.productId,
        ),
      };

    case "CLEAR":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}
