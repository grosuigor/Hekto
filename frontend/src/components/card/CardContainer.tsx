import clsx from "clsx/lite";
import type { ComponentWithChildProps } from "@/types";
import styles from "./CardContainer.module.scss";
import { useCard } from "./hooks";

type CardContainerProps = ComponentWithChildProps &
  (
    | {
        path: string;
      }
    | {
        id: string;
      }
  );

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
