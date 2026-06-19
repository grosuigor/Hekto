import type {
  CartProduct,
  ListedProduct,
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
      view: "grid" | "list";
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
  if (props.type === "listed") {
    return <ListedProductCard {...props} />;
  }

  if (props.type === "cart") {
    return <CartProductCard {...props} />;
  }

  if (props.type === "wishlist") {
    return <WishlistProductCard {...props} />;
  }

  if (props.type === "search") {
    return <SearchProductCard {...props} />;
  }

  const Component = PREVIEW_PRODUCT_MAP[props.type];

  return <Component {...props} />;
}
