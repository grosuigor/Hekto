import type { ComponentWithoutChildrenProps } from "@/types";

type CardButtonVariant = "Category" | "Details";

export type CardButtonProps = ComponentWithoutChildrenProps & {
  variant: CardButtonVariant;
};