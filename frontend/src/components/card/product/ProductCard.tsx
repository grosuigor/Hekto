import type {
  CartProduct,
  ListedProduct,
  View,
  PreviewProduct,
  PreviewProductType,
  SearchProduct,
  WishlistProduct,
} from "@/types";
import { ListedProductCard } from "./listed";
import {
  FeaturedProductCard,
  LatestProductCard,
  TrendingProductCard,
} from "./preview";
import { SearchProductCard } from "./search";
import { CartProductCard, WishlistProductCard } from "./stored";

type ProductCardTypes =
  | {
      type: "listed";
      view: View;
      product: ListedProduct;
    }
  | {
      type: "cart";
      product: CartProduct;
      quantity: number;
      onQuantityChange: (quantity: number) => void;
      onRemove: () => void;
    }
  | {
      type: "wishlist";
      product: WishlistProduct;
      onRemove: () => void;
    }
  | {
      type: "search";
      product: SearchProduct;
    }
  | {
      type: PreviewProductType;
      product: PreviewProduct;
    };

const PREVIEW_PRODUCT_MAP = {
  featured: FeaturedProductCard,
  latest: LatestProductCard,
  trending: TrendingProductCard,
};

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
