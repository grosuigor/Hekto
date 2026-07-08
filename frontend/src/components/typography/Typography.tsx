import type { TypographyProps } from "./types";
import clsx from "clsx/lite";
import { useMemo } from "react";
import styles from "./Typography.module.scss";

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
