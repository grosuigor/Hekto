import { useLoadedPreviewProducts } from "@/hooks";

import { ProductCard, Section, Skeleton } from "@/components";

import { FALLBACK } from "./data";

import styles from "./TrendingProducts.module.scss";

export function TrendingProducts() {
  const products = useLoadedPreviewProducts("trending");

  return (
    <Section gap="2xl" title="Trending Products">
      <div className={styles.grid}>
        {products
          ? products.map((product) => (
              <ProductCard key={product.id} type="trending" product={product} />
            ))
          : FALLBACK.map((_, i) => (
              <Skeleton key={i} className={styles.skeleton} />
            ))}
      </div>
    </Section>
  );
}
