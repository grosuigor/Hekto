import { type PropsWithChildren } from "react";
import { CartProvider } from "./cart";
import { WishlistProvider } from "./wishlist";

function createDefaultItemsState() {
  return {
    items: [],
    isPending: true,
  };
}

const DEFAULT_CART_STATE = createDefaultItemsState();
const DEFAULT_WISHLIST_STATE = createDefaultItemsState();

export function ItemsProvider({ children }: PropsWithChildren) {
  return (
    <CartProvider value={DEFAULT_CART_STATE}>
      <WishlistProvider value={DEFAULT_WISHLIST_STATE}>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
