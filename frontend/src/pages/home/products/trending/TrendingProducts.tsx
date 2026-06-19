import { ProductCard, Section, Skeleton } from "@/components";
import { useLoadedPreviewProducts } from "@/hooks";
import styles from "./TrendingProducts.module.scss";

const FALLBACK = Array.from({ length: 4 });

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
