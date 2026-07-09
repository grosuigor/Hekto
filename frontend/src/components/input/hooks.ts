import { useEffect, useRef, useState } from "react";

export function useEndAdornmentWidth(endAdornment?: React.ReactNode) {
  const endAdornmentRef = useRef<HTMLDivElement>(null);
  const [endAdornmentWidth, setEndAdornmentWidth] = useState(0);

  useEffect(() => {
    const node = endAdornmentRef.current;

    if (!node || !endAdornment) {
      setEndAdornmentWidth(0);
      return;
    }

    const updateWidth = () => {
      setEndAdornmentWidth(node.offsetWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(node);

    return () => observer.disconnect();
  }, [endAdornment]);

  return {
    endAdornmentRef,
    endAdornmentWidth
  };
}