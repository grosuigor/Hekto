import { Button, Typography } from "@/components";
import clsx from "clsx/lite";
import styles from "./Pagination.module.scss";
import { usePagination } from "./hooks";

type PaginationProps = {
  totalPages: number;
};

export function Pagination({ totalPages }: PaginationProps) {
  const { activePage, withGaps, updatePagination } = usePagination(totalPages);

  return (
    <div className={styles.container}>
      {withGaps.map((item) =>
        item === "gap" ? (
          <Typography className={styles.gap} key="gap" variant="body" color="grey-3">
            ...
          </Typography>
        ) : (
          <Button
            key={item}
            variant={item === activePage ? "filled" : "text"}
            color={item === activePage ? "primary" : "grey-3"}
            className={styles.button}
            onClick={() => updatePagination(item)}
            rounded
          >
            <Typography
              variant="body"
              modifier="small"
              isLato
              className={clsx(
                item === activePage && styles["label--active"],
              )}
            >
              {item}
            </Typography>
          </Button>
        ),
      )}
    </div>
  );
}
