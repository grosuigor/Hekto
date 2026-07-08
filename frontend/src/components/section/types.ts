import type { ComponentProps } from "@/types";

type SectionVariant = "page" | "layout";
type SectionBgColor = "tertiary" | "grey-1" | "grey-2";
type SectionGap = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type SectionProps = ComponentProps & {
  component?: React.ElementType;
  variant?: SectionVariant;
  bgImage?: string;
  bgColor?: SectionBgColor;
  title?: string;
  gap?: SectionGap;
};