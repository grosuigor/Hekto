import type { ComponentWithoutChildrenProps } from "@/types";

export type ImageProps = ComponentWithoutChildrenProps & {
  src: string;
  alt: string;
  isLocal?: boolean;
  skeletonProps?: ComponentWithoutChildrenProps;
};