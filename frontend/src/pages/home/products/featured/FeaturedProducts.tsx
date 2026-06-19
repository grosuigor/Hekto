import { Carousel, ProductCard, Section, Skeleton } from "@/components";
import { useCarouselVisibleCount, useLoadedPreviewProducts } from "@/hooks";
import styles from "./FeaturedProducts.module.scss";

const FALLBACK = Array.from({ length: 16 });

export function FeaturedProducts() {
  const products = useLoadedPreviewProducts("featured");
  const visibleCount = useCarouselVisibleCount(4, { lg: 3, md: 2, sm: 1 });

  return (
    <Section gap="lg" title="Featured Products">
      <Carousel
        visibleCount={visibleCount}
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
