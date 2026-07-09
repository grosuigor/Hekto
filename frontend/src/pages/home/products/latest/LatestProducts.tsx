import clsx from "clsx/lite";
import { Carousel, ProductCard, Section, Skeleton } from "@/components";
import { useLoadedPreviewProducts } from "@/hooks";
import styles from "./LatestProducts.module.scss";

const LABELS = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
const FALLBACKS = LABELS.map(() => Array.from({ length: 6 }));

export function LatestProducts() {
  const productLists = useLoadedPreviewProducts("latest");

  return (
    <Section gap="xs" title="Latest Products">
      <Carousel
        controls={{
          className: styles.controls,
          position: "top",
          variant: "label",
          labels: LABELS,
        }}
        track={{ className: styles.track }}
      >
        {productLists
          ? productLists.map((productList, i) => (
              <div key={LABELS[i]} className={styles.grid}>
                {productList.map((product) => (
                  <ProductCard
                    key={product.id}
                    type="latest"
                    product={product}
                  />
                ))}
              </div>
            ))
          : FALLBACKS.map((fallback, i) => (
              <div key={LABELS[i]} className={clsx(styles.grid, styles["skeleton-grid"])}>
                {fallback.map((_, j) => (
                  <Skeleton key={j} className={styles.skeleton} />
                ))}
              </div>
            ))}
      </Carousel>
    </Section>
  );
}
