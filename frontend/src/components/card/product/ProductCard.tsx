import { PREVIEW_PRODUCT_MAP } from "./data";
import { ListedProductCard } from "./listed";
import { SearchProductCard } from "./search";
import { CartProductCard, WishlistProductCard } from "./stored";
import type { ProductCardTypes } from "./types";

export function ProductCard(props: ProductCardTypes) {
  switch (props.type) {
    case "listed":
      return <ListedProductCard {...props} />;
    case "cart":
      return <CartProductCard {...props} />;
    case "wishlist":
      return <WishlistProductCard {...props} />;
    case "search":
      return <SearchProductCard {...props} />;
    default: {
      const Component = PREVIEW_PRODUCT_MAP[props.type];
      return <Component {...props} />;
    }
  }
}
