import { useLoadedPreviewProducts } from "@/hooks";

import { Carousel, ProductCard, Section, Skeleton } from "@/components";

import { FALLBACK } from "./data";

import styles from "./FeaturedProducts.module.scss";

export function FeaturedProducts() {
  const products = useLoadedPreviewProducts("featured");

  return (
    <Section gap="lg" title="Featured Products">
      <Carousel
        visibleCountOptions={{ desktop: 4, options: { lg: 3, md: 2, sm: 1 } }}
        controls={{
          variant: "line",
          className: styles.controls,
        }}
        track={{ className: styles.track }}
      >
        {products
          ? products.map((product) => (
              <ProductCard key={product.id} type="featured" product={product} />
            ))
          : FALLBACK.map((_, i) => (
              <Skeleton key={i} className={styles.skeleton} />
            ))}
      </Carousel>
    </Section>
  );
}
