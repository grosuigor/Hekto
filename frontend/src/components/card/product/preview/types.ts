import type { ComponentProps, PreviewProduct } from "@/types";

import type { ProductActionsProps } from "../actions";

export type ProductCardContainerProps = ComponentProps & {
  product: PreviewProduct;
  showSale?: boolean;
  showActions?: boolean;
  showButton?: boolean;
  actionProps: Omit<ProductActionsProps, "id" | "image">;
};