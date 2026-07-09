import { useWishlist } from "@/hooks";

import { ProductCard, Section, Skeleton } from "@/components";

import { Empty } from "../empty";
import { ITEMS_COUNT_FALLBACK } from "./data";
import { loader } from "./loader";

import styles from "./Wishlist.module.scss";

function Wishlist() {
  const [products, dispatch] = useWishlist();

  if (products?.length === 0) {
    return <Empty title="Your wishlist is empty" cta="Start Browsing" />;
  }

  return (
    <Section gap="lg" title="Wishlist">
      <div className={styles.container}>
        {products
          ? products.map((product, i) =>
              product ? (
                <ProductCard
                  key={product.id}
                  type="wishlist"
                  product={product}
                  onRemove={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: { productId: product.id },
                    })
                  }
                />
              ) : (
                <Skeleton key={i} className={styles.skeleton} />
              ),
            )
          : Array.from({
              length: ITEMS_COUNT_FALLBACK,
            }).map((_, i) => <Skeleton key={i} className={styles.skeleton} />)}
      </div>
    </Section>
  );
}

Wishlist.loader = loader;

export { Wishlist };
