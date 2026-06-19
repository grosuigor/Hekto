import { Typography } from "@/components/typography";
import { usePrice } from "@/hooks";
import type { ProductCardProps } from "@/types";
import { ProductCardContainer } from "../ProductCardContainer";
import styles from "./TrendingProductCard.module.scss";

export function TrendingProductCard({ product }: ProductCardProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);

  return (
    <ProductCardContainer
      showSale={false}
      showActions={false}
      showButton={false}
      product={product}
      className={styles.card}
      actionProps={{ direction: "row" }}
    >
      <div className={styles.content}>
        <Typography variant="label" color="primary">
          {product.name}
        </Typography>
        <div>
          <Typography variant="label" color="black">
            {price}
          </Typography>
          <Typography variant="label" color="grey-3" decoration="line-through">
            {wasPrice}
          </Typography>
        </div>
      </div>
    </ProductCardContainer>
  );
}
