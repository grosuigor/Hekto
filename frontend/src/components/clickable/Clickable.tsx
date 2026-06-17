import type { ComponentProps } from "@/types";
import clsx from "clsx/lite";
import { useMemo, type ButtonHTMLAttributes, type MouseEvent } from "react";
import { Link } from "react-router";
import styles from "./Clickable.module.scss";

export type ClickableProps = ComponentProps & {
  variant: "text" | "filled";
  color?: "primary" | "success" | "grey-3" | "grey-2" | "white" | "black";
  size?: "md" | "sm";
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
      } & Pick<
        ButtonHTMLAttributes<HTMLButtonElement>,
        | "id"
        | "type"
        | "aria-expanded"
        | "aria-haspopup"
        | "tabIndex"
        | "role"
        | "hidden"
      >)
    | {
        type?: "link";
        onClick?: never;
        to: string;
      }
  );

export function Clickable({
  variant,
  color = "primary",
  size = "md",
  rounded,
  disabled,
  iconOnly,
  type,
  style,
  className,
  children,
  ...rest
}: ClickableProps) {
  const classes = useMemo(
    () =>
      clsx(
        styles.clickable,
        styles[`clickable--${variant}`],
        styles[`clickable--${color}`],
        size && styles[`clickable--${size}`],
        rounded && styles[`clickable--rounded`],
        disabled && styles[`clickable--disabled`],
        iconOnly && styles[`clickable--icon-only`],
        className,
      ),
    [className, color, disabled, iconOnly, rounded, size, variant],
  );

  if (type === "button") {
    return (
      <button
        type={type}
        className={classes}
        style={style}
        onClick={rest.onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={rest.to ?? ""} className={classes} style={style}>
      {children}
    </Link>
  );
}
