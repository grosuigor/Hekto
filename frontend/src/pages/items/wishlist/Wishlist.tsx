import { ProductCard, Section, Skeleton } from "@/components";
import { useWishlist } from "@/hooks";
import { Empty } from "../empty";
import styles from "./Wishlist.module.scss";
import { loader } from "./loader";

const ITEMS_COUNT_FALLBACK = 4;

function Wishlist() {
  const [products, dispatch] = useWishlist();

  if (products?.length === 0) {
    return <Empty />;
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
