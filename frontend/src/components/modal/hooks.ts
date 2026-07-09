import { type KeyboardEvent, type MouseEvent, useEffect } from "react";

export function useModal(
  open: boolean,
  onClose: (e: MouseEvent | KeyboardEvent) => void,
) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        onClose(e as unknown as KeyboardEvent);
      }
    };

    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [open, onClose]);
}
