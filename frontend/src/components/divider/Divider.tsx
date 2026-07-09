import clsx from "clsx/lite";
import type { DividerProps } from "./types";
import styles from "./Divider.module.scss";

export function Divider({
  orientation = "horizontal",
  style,
  className,
}: DividerProps) {
  return (
    <div
      style={style}
      className={clsx(
        className,
        styles.divider,
        styles[`divider--${orientation}`],
      )}
    />
  );
}
