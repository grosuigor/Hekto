import type { ComponentProps } from "@/types";
import clsx from "clsx/lite";
import { useMemo } from "react";
import styles from "./Typography.module.scss";

type TypographyProps = ComponentProps & {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle"
    | "label"
    | "body";
  component?: React.ElementType;
  isLato?: boolean;
  modifier?: "big" | "small" | "bold" | "extra-small";
  color?: "primary" | "grey-3" | "black" | "white";
  decoration?: "line-through";
  htmlFor?: string;
};

export function Typography({
  variant,
  component,
  isLato,
  modifier,
  color,
  decoration,
  htmlFor,
  style,
  className,
  children,
}: TypographyProps) {
  const Component: React.ElementType = useMemo(() => {
    if (component) {
      return component;
    }

    if (variant === "subtitle" || variant === "body" || variant === "label") {
      return "span";
    }

    return variant;
  }, [variant, component]);

  const isLabelElement = useMemo(() => component === "label", [component]);

  return (
    <Component
      className={clsx(
        styles[variant],
        isLato && styles[`text--lato`],
        modifier && styles[`${variant}--${modifier}`],
        color && styles[`text--${color}`],
        decoration && styles[`text--${decoration}`],
        className,
      )}
      style={style}
      {...(isLabelElement && htmlFor ? { htmlFor } : {})}
    >
      {children}
    </Component>
  );
}
