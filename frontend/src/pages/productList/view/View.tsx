import { Button, Icon, Input, Typography } from "@/components";
import { useQuery, useUpdater } from "@/hooks";
import { useMemo, type Dispatch, type SetStateAction } from "react";
import styles from "./View.module.scss";
import { COUNT_OPTIONS, SORTING_MAP } from "./data";

type ViewProps = {
  view: "grid" | "list";
  setView: Dispatch<SetStateAction<"grid" | "list">>;
};

export function View({ view, setView }: ViewProps) {
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

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Typography variant="body" color="grey-3" isLato>
          Per Page
        </Typography>
        <Input.Select
          id="pagination"
          value={pagination.count}
          setValue={paginationUpdater}
          options={COUNT_OPTIONS}
        />
      </div>
      <div className={styles.sorting}>
        <Typography variant="body" color="grey-3" isLato>
          Sort By
        </Typography>
        <Input.Select
          id="sorting"
          value={sortingName}
          setValue={sortingUpdater}
          options={Object.keys(SORTING_MAP)}
        />
      </div>
      <div className={styles.view}>
        <Typography variant="body" color="grey-3" isLato>
          View
        </Typography>
        {(["grid", "list"] as const).map((option) => (
          <Button
            key={option}
            color={option === view ? "primary" : "black"}
            rounded={true}
            size="sm"
            variant="text"
            onClick={() => setView(option)}
          >
            <Icon name={`${option}-view`} />
          </Button>
        ))}
      </div>
    </div>
  );
}
