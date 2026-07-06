import { ProductCard, Skeleton, Typography } from "@/components";
import { useLoadedListedProducts, useQuery } from "@/hooks";
import clsx from "clsx/lite";
import { Pagination } from "./pagination";
import styles from "./Products.module.scss";
import type { View as ViewType } from "@/types";

type ProductsProps = {
  view: ViewType;
};

const FALLBACK = Array.from({ length: 6 });

export function Products({ view }: ProductsProps) {
  const productsData = useLoadedListedProducts();
  const [{ pagination }] = useQuery();

  if (productsData && productsData.products.length === 0) {
    return (
      <div className={styles.empty}>
        <Typography variant="body" color="grey-3" isLato>
          No products found
        </Typography>
      </div>
    );
  }

  const totalPages = productsData
    ? Math.ceil(productsData.total / pagination.count)
    : 0;

  return (
    <div className={styles.container}>
      <div className={clsx(styles.view, styles[`view--${view}`])}>
        {productsData
          ? productsData.products.map((product) => (
              <ProductCard
                key={product.id}
                type="listed"
                product={product}
                view={view}
              />
            ))
          : FALLBACK.map((_, i) => (
              <Skeleton
                key={i}
                className={clsx(styles.skeleton, styles[`skeleton--${view}`])}
              />
            ))}
      </div>
      {productsData && totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
