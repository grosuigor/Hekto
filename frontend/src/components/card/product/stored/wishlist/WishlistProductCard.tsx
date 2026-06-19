import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { WishlistProduct } from "@/types";
import { FeaturedProductCard } from "../../preview";
import styles from "./WishlistProductCard.module.scss";

type WishlistProductCardProps = {
  product: WishlistProduct;
  onRemove: () => void;
};

export function WishlistProductCard({
  product,
  onRemove,
}: WishlistProductCardProps) {
  return (
    <FeaturedProductCard product={product} className={styles.card}>
      <Button
        variant="text"
        color="grey-2"
        rounded
        onClick={onRemove}
      >
        <Icon name="close" />
      </Button>
    </FeaturedProductCard>
  );
}
