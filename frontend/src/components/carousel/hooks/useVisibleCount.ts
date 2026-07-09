import { MEDIA_QUERIES } from "@/constants";
import { useMemo } from "react";
import { useMediaQuery } from "@/hooks";

export type VisibleCountOptions = {
  desktop: number;
  options?: {
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
  }
};

export function useVisibleCount({ desktop, options = {} }: VisibleCountOptions): number {
  const isXs = useMediaQuery(MEDIA_QUERIES.xs);
  const isSm = useMediaQuery(MEDIA_QUERIES.sm);
  const isMd = useMediaQuery(MEDIA_QUERIES.md);
  const isLg = useMediaQuery(MEDIA_QUERIES.lg);

  const visiBleCount = useMemo(() => {
    if (isXs) {
      return options.xs ?? options.sm ?? 1;
    }

    if (isSm) {
      return options.sm ?? 1;
    }

    if (isMd) {
      return options.md ?? Math.min(2, desktop);
    }

    if (isLg) {
      return options.lg ?? Math.min(3, desktop);
    }

    return desktop;
  }, [desktop, isLg, isMd, isSm, isXs, options]);

  return visiBleCount
}
