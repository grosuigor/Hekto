import type { CartProduct } from "@/types";

export type CartProductCardProps = {
  product: CartProduct;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
};