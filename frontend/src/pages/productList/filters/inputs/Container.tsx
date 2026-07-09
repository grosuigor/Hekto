import clsx from "clsx/lite";

import type { InputsContainerProps } from "./types";

import styles from "./Container.module.scss";

export function InputsContainer({ children, isOpened }: InputsContainerProps) {
  return (
    <div className={clsx(styles.container, !isOpened && styles.hidden)}>
      {children}
    </div>
  );
}
