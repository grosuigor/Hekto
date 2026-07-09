import type {
  ComponentWithChildrenProps,
  ComponentWithoutChildrenProps,
} from "@/types";

import type { VisibleCountOptions } from "./hooks";

type CarouselControlsPosition = "top" | "bottom";
type CarouselControlsVariant = "square" | "line" | "dot" | "label";

type CarouselControlsProps = ComponentWithoutChildrenProps & {
  position?: CarouselControlsPosition;
  variant: CarouselControlsVariant;
  labels?: string[];
};

export type CarouselProps = ComponentWithChildrenProps & {
  visibleCountOptions?: VisibleCountOptions;
  container?: ComponentWithoutChildrenProps;
  track?: ComponentWithoutChildrenProps;
  controls: CarouselControlsProps;
};