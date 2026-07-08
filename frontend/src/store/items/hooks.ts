import {
  ActionDispatch,
  Context,
  type Dispatch,
  useContext,
  useEffect,
  useRef,
  useTransition,
} from "react";

import { StoredItem } from "@/types";

import { itemsStorage } from "@/services/storage";

import type { ItemsActionType, ItemsStoreState } from "./types";

export function useItemsContext<
  Item extends StoredItem,
  StoreState extends ItemsStoreState<Item>,
>(Context: Context<StoreState | null>, contextName = "Items"): StoreState {
  const context = useContext(Context);

  if (context === null) {
    throw new Error(`${contextName} context used without provider!`);
  }

  return context;
}

export function useItemsDispatchContext<
  Item extends StoredItem,
  ExtraActionsType = never,
>(
  DispatchContext: Context<Dispatch<
    ItemsActionType<Item> | ExtraActionsType
  > | null>,
  contextName = "Items dispatch",
): Dispatch<ItemsActionType<Item> | ExtraActionsType> {
  const context = useContext(DispatchContext);

  if (context === null) {
    throw new Error(`${contextName} context used without provider!`);
  }

  return context;
}

export function useHydration<
  Item extends StoredItem,
  StoreState extends ItemsStoreState<Item>,
  ExtraActionsType = never,
>(
  state: StoreState,
  dispatch: ActionDispatch<
    [action: ItemsActionType<Item> | ExtraActionsType]
  >,
  type: "wishlist" | "cart",
) {
  const [isPending, startTransition] = useTransition();
  const isHydrated = useRef(false);

  useEffect(() => {
    if (isHydrated.current) {
      return;
    }

    let cancelled = false;

    startTransition(async () => {
      const stored = await itemsStorage.getItems(type) as Item[];

      if (cancelled) {
        return;
      }

      isHydrated.current = true;
      dispatch({ type: "INIT", payload: stored ?? [] });
    });

    return () => {
      cancelled = true;
    };
  }, [dispatch, type]);

  useEffect(() => {
    if (!isHydrated.current) {
      return;
    }

    startTransition(async () => {
      await itemsStorage.setItems(type, state.items);
    });
  }, [state.items, type]);

  return isPending;
}
