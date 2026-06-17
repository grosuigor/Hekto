import { Button, Icon, Skeleton, Typography } from "@/components";
import { useFilterUpdater, useLoadedFilters, useQuery, useUIFilters } from "@/hooks";
import type { Range } from "@/types";
import clsx from "clsx/lite";
import styles from "./Filters.module.scss";
import { Checkboxes, InputsContainer, RangeInput } from "./inputs";

export function Filters() {
  const allFilters = useLoadedFilters();
  const { getUIFilter, toggleFilterVisibility } = useUIFilters();
  const [{ draftFilters }, dispatch] = useQuery();
  const onFilterChange = useFilterUpdater(allFilters, draftFilters);

  if (!allFilters) {
    return <Skeleton className={styles.skeleton} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button
          variant="filled"
          size="sm"
          onClick={() => dispatch({ type: "APPLY_FILTERS" })}
        >
          <Typography variant="subtitle" modifier="extra-small">
            Apply Filters
          </Typography>
        </Button>
        <Button
          variant="filled"
          size="sm"
          color="success"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          <Typography variant="subtitle" modifier="extra-small">
            Clear Filters
          </Typography>
        </Button>
      </div>
      <div className={styles.filters} onChange={onFilterChange}>
        {allFilters &&
          allFilters.map((filter) => {
            const filterWithValue = draftFilters.find(
              (f) => f.name === filter.name,
            );
            const uiFilter = getUIFilter<typeof filter.type>(filter.name)!;
            return (
              <div
                key={filter.name}
                className={clsx(
                  styles["filter-group"],
                  !uiFilter.opened && styles.hidden,
                )}
              >
                <Button
                  variant="text"
                  color="black"
                  onClick={() => toggleFilterVisibility(filter.name)}
                >
                  <Typography variant="subtitle" modifier="small">
                    {filter.label}
                  </Typography>
                  <Icon name="chevron-down" />
                </Button>
                <InputsContainer isOpened={uiFilter.opened}>
                  {filter.type === "multi-select" ? (
                    <Checkboxes
                      filterName={filter.name}
                      allValues={filter.values}
                      filterValues={(filterWithValue?.values as string[]) ?? []}
                      color={uiFilter.color}
                    />
                  ) : (
                    <RangeInput
                      filterName={filter.name}
                      allValues={filter.values}
                      filterValues={
                        (filterWithValue?.values as Range) ?? filter.values
                      }
                      step={uiFilter.step}
                      color={uiFilter.color}
                    />
                  )}
                </InputsContainer>
              </div>
            );
          })}
      </div>
    </div>
  );
}
