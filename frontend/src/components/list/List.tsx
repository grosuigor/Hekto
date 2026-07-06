import type { ComponentWithChildrenProps } from "@/types";
import clsx from "clsx/lite";
import styles from "./List.module.scss";

type ListProps = ComponentWithChildrenProps & {
  keys: string[];
};

export function List({
  style,
  className,
  children,
  keys
}: ListProps) {
  return (
    <ul className={clsx(styles.list, className)} style={style}>
      {children.map((child, i) => (
        <li
          key={keys[i]}
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
