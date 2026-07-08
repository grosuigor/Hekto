import { type PropsWithChildren } from "react";

import { CartProvider } from "./cart";
import { defaultCartState, defaultWishlistState } from "./defaults";
import { WishlistProvider } from "./wishlist";

export function ItemsProvider({ children }: PropsWithChildren) {
  return (
    <CartProvider value={defaultCartState}>
      <WishlistProvider value={defaultWishlistState}>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
