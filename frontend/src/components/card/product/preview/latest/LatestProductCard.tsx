import type { ProductCardProps } from "@/types";

import { usePrice } from "@/hooks";

import { Typography } from "@/components/typography";

import { ProductCardContainer } from "../ProductCardContainer";
import { useTrimmedName } from "./hooks";

import styles from "./LatestProductCard.module.scss";

export function LatestProductCard({ product }: ProductCardProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);
  const trimmedName = useTrimmedName(product.name);

  return (
    <ProductCardContainer
      showButton={false}
      product={product}
      className={styles.card}
      actionProps={{ direction: "column" }}
    >
      <div className={styles.content}>
        <Typography variant="label" color="black">
          {trimmedName}
        </Typography>
        <div className="grower" />
        <Typography variant="label" color="black">
          {price}
        </Typography>
        <Typography variant="label" color="grey-3" decoration="line-through">
          {wasPrice}
        </Typography>
      </div>
    </ProductCardContainer>
  );
}
