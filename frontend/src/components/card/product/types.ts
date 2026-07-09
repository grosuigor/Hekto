import type {
  CartProduct,
  ListedProduct,
  View,
  PreviewProduct,
  PreviewProductType,
  SearchProduct,
  WishlistProduct,
} from "@/types";

export type ProductCardTypes =
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