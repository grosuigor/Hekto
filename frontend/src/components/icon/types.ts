import type { ComponentProps } from "@/types";

type IconSize = "lg" | "md" | "sm";

export type IconProps = ComponentProps & {
  name: string;
  size?: IconSize;
};