import { type KeyboardEvent, type MouseEvent, useEffect } from "react";

export function useModal(open: boolean, onClose: (e: MouseEvent | KeyboardEvent) => void) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      
      onClose(e as unknown as KeyboardEvent);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);
}