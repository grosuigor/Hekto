import { useCallback, useMemo } from "react";
import { useQuery } from "@/hooks";

export function usePagination(totalPages: number) {
  const [{pagination}, dispatch] = useQuery()

  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const visiblePages = useMemo(
    () =>
      pages.filter(
        (page) =>
          page === 1 ||
          page === totalPages ||
          Math.abs(page - pagination.page) <= 2,
      ),
    [pages, pagination.page, totalPages],
  );

  const withGaps = useMemo(() => {
    const withGaps: (number | "gap")[] = [];

    for (let i = 0; i < visiblePages.length; i++) {
      if (i > 0 && visiblePages[i] - visiblePages[i - 1] > 1) {
        withGaps.push("gap");
      }
      withGaps.push(visiblePages[i]);
    }

    return withGaps;
  }, [visiblePages]);

  const updatePagination = useCallback((item: number) => {
    dispatch({
      type: "SET_PAGINATION",
      payload: { ...pagination, page: item },
    })
  }, [pagination, dispatch]);

  return {
    activePage: pagination.page,
    withGaps,
    updatePagination,
  }
}