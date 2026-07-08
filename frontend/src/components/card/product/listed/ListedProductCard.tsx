import { Image } from "@/components/image";
import { Typography } from "@/components/typography";
import { usePrice } from "@/hooks";
import type { ListedProductCardProps } from "./types";
import clsx from "clsx/lite";
import { CardContainer } from "../../CardContainer";
import { ProductActions } from "../actions";
import styles from "./ListedProductCard.module.scss";
import { Rating } from "@/components/rating";

export function ListedProductCard({ product, view }: ListedProductCardProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);

  return (
    <CardContainer
      id={product.id}
      className={clsx(styles.card, styles[`card--${view}`])}
    >
      <Image src={product.thumbnail} alt={product.name} />
      <div className={clsx(styles.content, styles[`content--${view}`])}>
        <div className={clsx(styles.name, styles[`name--${view}`])}>
          <Typography variant="subtitle" modifier="small" color="black">
            {product.name}
          </Typography>
          <Rating rating={product.rating.value} />
        </div>
        <div style={{marginBottom: view === "grid" ? "2.4rem" : "0rem"}} className={styles.price}>
          <Typography variant="label" color="black">
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
        <Typography variant="body" color="grey-3" isLato>
          {product.description}
        </Typography>
        <div className="grower" />
        <ProductActions
          id={product.id}
          image={product.thumbnail}
          className={styles.actions}
          direction="row"
        />
      </div>
    </CardContainer>
  );
}
