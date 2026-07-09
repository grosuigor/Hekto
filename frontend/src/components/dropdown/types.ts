import type { ComponentProps } from "@/types";

export type DropdownProps = ComponentProps & {
  options: Array<{
    text: string;
    onClick: () => void;
  }>;
};