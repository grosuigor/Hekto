import { useLoadedFilters } from "@/hooks/loader";
import type { Filter } from "@/types";
import { useCallback, useState } from "react";
import { FILTER_COLORS, RANGE_FILTER_STEPS } from "./data";

type UIFilter = Filter & {
  color: "info" | "secondary" | "danger";
  opened: boolean;
  step: number | undefined;
};

type UseUIFiltersFn = () => {
  getUIFilter: <T extends UIFilter["type"]>(
    filterName: (UIFilter & { type: T })["name"],
  ) => (UIFilter & { type: T }) | undefined;
  toggleFilterVisibility: (filterName: string) => void;
};

export const useUIFilters: UseUIFiltersFn = () => {
  const filters = useLoadedFilters();
  const [filterVisibility, setFilterVisibility] =
    useState<Record<string, boolean>>();

  const getUIFilter = useCallback(
    <T extends UIFilter["type"]>(
      filterName: (UIFilter & { type: T })["name"],
    ): (UIFilter & { type: T }) | undefined => {
      if (!filters) {
        return undefined;
      }

      const filter = filters.find((item) => item.name === filterName);

      if (!filter) {
        return undefined;
      }

      return {
        ...filter,
        color: FILTER_COLORS[filter.name],
        opened: filterVisibility?.[filter.name] ?? true,
        step: RANGE_FILTER_STEPS[filter.name],
      } as UIFilter & { type: T };
    },
    [filterVisibility, filters],
  );

  const toggleFilterVisibility = useCallback(
    (filterName: string) => {
      if (!filters) {
        return;
      }

      setFilterVisibility((prev) =>
        prev
          ? { ...prev, [filterName]: !prev[filterName] }
          : Object.fromEntries(
              filters.map((filter) => [
                filter.name,
                filterName !== filter.name,
              ]),
            ),
      );
    },
    [filters],
  );

  return {
    getUIFilter,
    toggleFilterVisibility,
  };
};
