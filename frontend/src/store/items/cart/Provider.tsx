import { ProviderProps, useReducer } from "react";
import { useHydration } from "../hooks";
import { CartContext, CartDispatchContext } from "./context";
import { cartReducer } from "./reducer";
import { CartStoreState } from "./types";

export function CartProvider({
  children,
  value: initialValue,
}: ProviderProps<CartStoreState>) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  const isPending = useHydration(state, dispatch, "cart");

  return (
    <CartContext value={{ ...state, isPending }}>
      <CartDispatchContext value={dispatch}>{children}</CartDispatchContext>
    </CartContext>
  );
}
