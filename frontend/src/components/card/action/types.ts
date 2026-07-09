import type { ComponentWithoutChildrenProps } from "@/types";

type CardActionVariant = "Category" | "Details";

export type CardActionProps = ComponentWithoutChildrenProps & {
  to: string;
  variant: CardActionVariant;
};
