import type { ComponentProps } from "@/types";
import clsx from "clsx/lite";
import styles from "./Icon.module.scss";

type IconProps = ComponentProps & {
  name: string;
  size?: "lg" | "md" | "sm";
};

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
