import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";

import { FeaturedProductCard } from "../../preview";
import type { WishlistProductCardProps } from "./types";

import styles from "./WishlistProductCard.module.scss";

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
