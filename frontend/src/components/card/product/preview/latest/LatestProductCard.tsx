import { Typography } from "@/components/typography";
import { usePrice } from "@/hooks";
import type { ProductCardProps } from "@/types";
import { ProductCardContainer } from "../ProductCardContainer";
import styles from "./LatestProductCard.module.scss";
import { useMemo } from "react";

const MAX_WORD_LEN = 30

export function LatestProductCard({ product }: ProductCardProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);

  const trimmedName = useMemo(() => {
    if (product.name.length > MAX_WORD_LEN) {
      return product.name.slice(0, MAX_WORD_LEN - 3) + "...";
    }

    return product.name;
  }, [product.name]);

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
