import type { ComponentWithoutChildrenProps } from "@/types";

export type RatingProps = ComponentWithoutChildrenProps & {
  rating: number;
};