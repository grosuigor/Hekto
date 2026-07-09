import { useEffect, useState, type Dispatch, type SetStateAction } from "react";


export function useTabs(total: number): [number, Dispatch<SetStateAction<number>>] {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setActiveIndex((prev) => (prev + 1) % total);
          break;

        case "ArrowLeft":
          setActiveIndex((prev) => (prev - 1 + total) % total);
          break;

        case "Home":
          setActiveIndex(0);
          break;

        case "End":
          setActiveIndex(total - 1);
          break;
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [total]);

  return [activeIndex, setActiveIndex]
}