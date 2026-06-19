import { Section, Skeleton } from "@/components";
import { useLoadedDetailedProduct } from "@/hooks";
import { Gallery } from "./gallery";
import { Info } from "./info";
import { loader } from "./loader";
import styles from "./Product.module.scss";
import { Related } from "./related";
import { Stats } from "./stats";

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
