import type { ComponentWithoutChildrenProps } from "@/types";

export type SaleProps = ComponentWithoutChildrenProps & {
  isSale: boolean;
};