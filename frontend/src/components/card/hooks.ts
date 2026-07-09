import { type KeyboardEvent, type MouseEvent, useCallback, useMemo } from "react";
import { useNavigate } from "react-router";


const INTERACTIVE_SELECTOR =
  "button, a, input, select, textarea, [role='button']";

export function useCard(props: { id: string } | { path: string }) {
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

  return {
    handleClick,
    handleKeyDown
  };
}