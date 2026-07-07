import { Button, Icon, Input, Typography } from "@/components";
import { type Dispatch, type SetStateAction } from "react";
import styles from "./View.module.scss";
import { COUNT_OPTIONS, SORTING_MAP } from "./data";
import { useView } from "./hooks";
import type { View as ViewType } from "@/types";

type ViewProps = {
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
};

export function View({ view, setView }: ViewProps) {
  const { pagination, sorting } = useView();

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <Typography variant="body" color="grey-3" isLato>
          Per Page
        </Typography>
        <Input.Select
          id="pagination"
          value={pagination.count}
          setValue={pagination.updater}
          options={COUNT_OPTIONS}
        />
      </div>
      <div className={styles.sorting}>
        <Typography variant="body" color="grey-3" isLato>
          Sort By
        </Typography>
        <Input.Select
          id="sorting"
          value={sorting.name}
          setValue={sorting.updater}
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
