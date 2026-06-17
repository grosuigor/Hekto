import clsx from "clsx/lite";
import type { ComponentWithChildProps } from "@/types";
import {
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router";
import styles from "./CardContainer.module.scss";

const INTERACTIVE_SELECTOR =
  "button, a, input, select, textarea, [role='button']";

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
  const navigate = useNavigate();

  const path = useMemo(() => {
    if ("id" in props) {
      return `/products/${props.id}`;
    }

    return props.path;
  }, [props]);

  const navigateToPath = useCallback(() => {
    navigate(path);
  }, [navigate, path]);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).closest(INTERACTIVE_SELECTOR)) {
        return;
      }

      navigateToPath();
    },
    [navigateToPath],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Enter" && e.key !== " ") {
        return;
      }

      e.preventDefault();
      navigateToPath();
    },
    [navigateToPath],
  );

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
