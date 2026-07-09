import type { ComponentProps } from "@/types";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle" | "label" | "body";
type TypographyModifier = "big" | "small" | "bold" | "extra-small";
type TypographyColor = "primary" | "grey-3" | "black" | "white";
type TypographyDecoration = "line-through";

export type TypographyProps = ComponentProps & {
  variant: TypographyVariant;
  component?: React.ElementType;
  isLato?: boolean;
  modifier?: TypographyModifier;
  color?: TypographyColor;
  decoration?: TypographyDecoration;
  htmlFor?: string;
};