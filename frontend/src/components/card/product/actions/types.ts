import type { ComponentWithoutChildrenProps } from "@/types";

type ProductActionsDirection = "row" | "column";

export type ProductActionsProps = ComponentWithoutChildrenProps & {
  id: string;
  image: string;
  direction: ProductActionsDirection;
};