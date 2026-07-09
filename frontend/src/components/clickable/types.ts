import type { ButtonHTMLAttributes, MouseEvent } from "react";

import type { ComponentProps } from "@/types";

type ClickableVariant = "text" | "filled";
type ClickableColor =
  | "primary"
  | "success"
  | "grey-3"
  | "grey-2"
  | "white"
  | "black";
type ClickableSize = "md" | "sm";

type ButtonAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "id"
  | "type"
  | "aria-expanded"
  | "aria-haspopup"
  | "tabIndex"
  | "role"
  | "hidden"
>;

export type ClickableProps = ComponentProps & {
  variant: ClickableVariant;
  color?: ClickableColor;
  size?: ClickableSize;
  rounded?: boolean;
  disabled?: boolean;
  iconOnly?: boolean;
} & (
    | ({
        type?: "button";
        onClick?: (
          e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
        ) => void;
        to?: never;
      } & ButtonAttributes)
    | {
        type?: "link";
        onClick?: never;
        target?: string;
        rel?: string;
        to: string;
      }
  );
