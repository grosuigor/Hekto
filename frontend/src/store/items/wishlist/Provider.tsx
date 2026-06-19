import { ProviderProps, useReducer } from "react";
import { useHydration } from "../hooks";
import { WishlistContext, WishlistDispatchContext } from "./context";
import { wishlistReducer } from "./reducer";
import { WishlistStoreState } from "./types";

export function WishlistProvider({
  children,
  value: initialValue,
}: ProviderProps<WishlistStoreState>) {
  const [state, dispatch] = useReducer(wishlistReducer, initialValue);
  const isPending = useHydration(state, dispatch, "wishlist");

  return (
    <WishlistContext value={{ ...state, isPending }}>
      <WishlistDispatchContext value={dispatch}>{children}</WishlistDispatchContext>
    </WishlistContext>
  );
}
