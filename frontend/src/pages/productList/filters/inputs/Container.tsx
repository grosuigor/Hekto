import clsx from "clsx/lite";
import styles from "./Container.module.scss";
import type { InputsContainerProps } from "./types";

export function InputsContainer({ children, isOpened }: InputsContainerProps) {
  return (
    <div className={clsx(styles.container, !isOpened && styles.hidden)}>
      {children}
    </div>
  );
}
