import { type ChangeEvent, useCallback } from "react";

import type { Filter, ListedProduct, Range } from "@/types";

import { useQueryDispatchContext } from "@/store";

export function useFilterUpdater(
  allFilters: Filter[] | undefined,
  filters: Filter[],
) {
  const dispatch = useQueryDispatchContext();

  const onFilterChange = useCallback(
    (e: ChangeEvent<HTMLDivElement>) => {
      const target = e.target as HTMLInputElement;
      const { name, value, bound } = target.dataset;
      if (!name) return;

      const newFilters = filters.map((f) => ({ ...f }));
      const filterIndex = newFilters.findIndex((f) => f.name === name);

      if (target.type === "checkbox") {
        if (!value) return;

        if (filterIndex === -1) {
          const source = allFilters?.find((f) => f.name === name);
          newFilters.push({
            name: name as keyof ListedProduct,
            label: source?.label ?? name,
            type: "multi-select",
            values: [value],
          });
        } else {
          const filter = newFilters[filterIndex] as Filter & {
            type: "multi-select";
          };
          if (filter.values.includes(value)) {
            const updated = filter.values.filter((v) => v !== value);
            if (updated.length === 0) {
              newFilters.splice(filterIndex, 1);
            } else {
              newFilters[filterIndex] = { ...filter, values: updated };
            }
          } else {
            newFilters[filterIndex] = {
              ...filter,
              values: [...filter.values, value],
            };
          }
        }
      } else if (target.type === "range") {
        if (!bound) return;
        const numValue = Number(target.value);

        let rangeValues: Range;

        if (filterIndex === -1) {
          const source = allFilters?.find((f) => f.name === name);
          if (!source || source.type !== "range") return;
          rangeValues = { ...source.values, [bound]: numValue };
        } else {
          const filter = newFilters[filterIndex] as Filter & {
            type: "range";
          };
          rangeValues = { ...(filter.values as Range), [bound]: numValue };
        }

        if (rangeValues.min > rangeValues.max) {
          rangeValues = { min: rangeValues.max, max: rangeValues.min };
        }

        const source = allFilters?.find((f) => f.name === name);
        const entry: Filter & { type: "range" } = {
          name: name as keyof ListedProduct,
          label: source?.label ?? name,
          type: "range",
          values: rangeValues,
        };

        if (filterIndex === -1) {
          newFilters.push(entry);
        } else {
          newFilters[filterIndex] = entry;
        }
      }

      dispatch({ type: "SET_DRAFT_FILTERS", payload: newFilters });
    },
    [filters, allFilters, dispatch],
  );

  return onFilterChange;
}
