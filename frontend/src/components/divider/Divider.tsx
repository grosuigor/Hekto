import clsx from "clsx/lite";
import type { StyleProps } from "@/types";
import styles from "./Divider.module.scss";

type DividerProps = StyleProps & {
  orientation?: "horizontal" | "vertical";
};

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
