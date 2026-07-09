import { type Context, createContext, type Dispatch } from "react";

import type { StoredItem } from "@/types";

import type { ItemsActionType, ItemsStoreState } from "./types";

export function createContexts<
  Item extends StoredItem,
  StoreState extends ItemsStoreState<Item>,
  ExtraActionsType = never,
>(): [
  Context<StoreState | null>,
  Context<Dispatch<ItemsActionType<Item> | ExtraActionsType> | null>,
] {
  const Context = createContext<StoreState | null>(null);
  const DispatchContext = createContext<Dispatch<
    ItemsActionType<Item> | ExtraActionsType
  > | null>(null);

  return [Context, DispatchContext];
}
