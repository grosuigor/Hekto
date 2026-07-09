import { type PropsWithChildren } from "react";
import { CartProvider } from "./cart";
import { WishlistProvider } from "./wishlist";
import { defaultCartState, defaultWishlistState } from "./defaults";

export function ItemsProvider({ children }: PropsWithChildren) {
  return (
    <CartProvider value={defaultCartState}>
      <WishlistProvider value={defaultWishlistState}>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
