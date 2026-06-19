import { ProductCard, Section } from "@/components";
import type { PreviewProduct } from "@/types";
import styles from "./Related.module.scss";

type RelatedProps = {
  products: PreviewProduct[];
};

export function Related({ products }: RelatedProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <Section gap="lg" title="Related Products" className={styles.section}>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} type="featured" product={product} />
        ))}
      </div>
    </Section>
  );
}
