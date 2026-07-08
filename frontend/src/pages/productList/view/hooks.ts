import { useMemo } from "react";

import { useQuery, useUpdater } from "@/hooks";

import { SORTING_MAP } from "./data";

export function useView() {
  const [{sorting, pagination}, dispatch] = useQuery()

  const sortingName = useMemo(() => {
    return Object.keys(SORTING_MAP).find(
      (key) =>
        SORTING_MAP[key].key === sorting.key &&
        SORTING_MAP[key].order === sorting.order,
    )!;
  }, [sorting]);

  const paginationUpdater = useUpdater(pagination.count, (newCount: number) => {
    dispatch({
      type: "SET_PAGINATION",
      payload: { ...pagination, count: newCount },
    });
  });

  const sortingUpdater = useUpdater(sortingName, (newSortingName: string) => {
    dispatch({ type: "SET_SORTING", payload: SORTING_MAP[newSortingName] });
  });

  return {
    pagination: {
      count: pagination.count,
      updater: paginationUpdater,
    },
    sorting: {
      name: sortingName,
      updater: sortingUpdater,
    }
  }
}