import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import { usePrice } from "@/hooks";
import type { SearchProductCardProps } from "./types";
import { CardContainer } from "../../CardContainer";
import styles from "./SearchProductCard.module.scss";

export function SearchProductCard({ product }: SearchProductCardProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);

  return (
    <CardContainer id={product.id} className={styles.card}>
      <Image src={product.thumbnail} alt={product.name} />
      <div className={styles.content}>
        <Typography variant="label" color="black" modifier="small">
          {product.name}
        </Typography>
        <div className={styles.price}>
          <Typography variant="label" color="primary" modifier="small">
            {price}
          </Typography>
          <Typography
            variant="label"
            color="grey-3"
            modifier="small"
            decoration="line-through"
          >
            {wasPrice}
          </Typography>
        </div>
      </div>
    </CardContainer>
  );
}
