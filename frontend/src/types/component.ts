import type { CSSProperties, ReactNode } from "react";
import type { PreviewProduct } from "./product";

export type StyleProps = {
  style?: CSSProperties;
  className?: string;
};

export type ComponentWithoutChildrenProps = StyleProps;

export type ComponentWithChildProps = StyleProps & {
  children: ReactNode;
};

export type ComponentWithChildrenProps = StyleProps & {
  children: ReactNode[];
};

export type ComponentProps = StyleProps & {
  children?: ReactNode;
};

export type ProductCardProps = {
  product: PreviewProduct;
};