import { Button, Typography } from "@/components";
import clsx from "clsx/lite";
import { useMemo } from "react";
import styles from "./Pagination.module.scss";
import { useQuery } from "@/hooks";

type PaginationProps = {
  totalPages: number;
};

export function Pagination({ totalPages }: PaginationProps) {
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
            variant={item === pagination.page ? "filled" : "text"}
            color={item === pagination.page ? "primary" : "grey-3"}
            className={styles.button}
            onClick={() =>
              dispatch({
                type: "SET_PAGINATION",
                payload: { ...pagination, page: item },
              })
            }
            rounded
          >
            <Typography
              variant="body"
              modifier="small"
              isLato
              className={clsx(
                item === pagination.page && styles["label--active"],
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
