import clsx from "clsx/lite";

import type { IconProps } from "./types";

import styles from "./Icon.module.scss";

export function Icon({
  name,
  size = "md",
  style,
  className,
}: IconProps) {
  return (
    <svg
      style={style}
      className={clsx(styles.icon, size !== "md" && styles[size], className)}
      aria-hidden={true}
    >
      <use href={`/icons.svg#${name}`}></use>
    </svg>
  );
}
