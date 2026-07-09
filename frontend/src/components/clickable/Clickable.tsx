import { useMemo } from "react";

import { Link } from "react-router";

import clsx from "clsx/lite";

import type { ClickableProps } from "./types";

import styles from "./Clickable.module.scss";

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
