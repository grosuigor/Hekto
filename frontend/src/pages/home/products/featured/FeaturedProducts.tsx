import { Carousel, ProductCard, Section, Skeleton } from "@/components";
import { useLoadedPreviewProducts } from "@/hooks";
import styles from "./FeaturedProducts.module.scss";
import { FALLBACK } from "./data";

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
