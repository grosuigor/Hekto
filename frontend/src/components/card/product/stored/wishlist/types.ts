import type { WishlistProduct } from "@/types";

export type WishlistProductCardProps = {
  product: WishlistProduct;
  onRemove: () => void;
};