import clsx from "clsx/lite";

import { useCard } from "./hooks";
import type { CardContainerProps } from "./types";

import styles from "./CardContainer.module.scss";

export function CardContainer({
  style,
  className,
  children,
  ...props
}: CardContainerProps) {
  const { handleClick, handleKeyDown } = useCard(props);

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={style}
      className={clsx(styles.card, className)}
    >
      {children}
    </div>
  );
}
