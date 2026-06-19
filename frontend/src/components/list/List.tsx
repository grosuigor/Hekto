import type { ComponentWithChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { Children, isValidElement } from "react";
import styles from "./List.module.scss";

export function List({
  style,
  className,
  children,
}: ComponentWithChildrenProps) {
  return (
    <ul className={clsx(styles.list, className)} style={style}>
      {Children.map(children, (child, i) => (
        <li
          key={isValidElement(child) && child.key != null ? child.key : i}
          className={clsx(
            styles["list__item"],
            styles[`list__item--${(i % 3) + 1}`],
          )}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}
