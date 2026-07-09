import { useLoadedDetailedProduct } from "@/hooks";

import { Section, Skeleton } from "@/components";

import { Gallery } from "./gallery";
import { Info } from "./info";
import { loader } from "./loader";
import { Related } from "./related";
import { Stats } from "./stats";

import styles from "./Product.module.scss";

function Product() {
  const product = useLoadedDetailedProduct();

  if (!product) {
    return (
      <Section gap="md">
        <div className={styles.layout}>
          <Skeleton className={styles.skeletonGallery} />
          <Skeleton className={styles.skeletonInfo} />
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section gap="md" className={styles.layout}>
        <Gallery
          images={[product.thumbnail, ...product.imageSet]}
          alt={product.name}
        />
        <Info product={product} />
      </Section>
      <Section bgColor="grey-1">
        <Stats product={product} />
      </Section>
      <Related products={product.relatedProducts} />
    </>
  );
}

Product.loader = loader;

export { Product };
