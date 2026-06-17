import type { StoredItem } from "@/types";

export type ItemsStoreState<T extends StoredItem> = {
  items: T[];
  isPending: boolean;
};

export type ItemsActionType<T extends StoredItem> =
  | { type: "INIT"; payload: T[] }
  | {
      type: "ADD_ITEM";
      payload: StoredItem;
    }
  | { type: "REMOVE_ITEM"; payload: StoredItem }
  | { type: "CLEAR" };
