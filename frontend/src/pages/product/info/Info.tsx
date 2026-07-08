import { useCart, usePrice } from "@/hooks";

import { Button, Icon, Rating, Typography } from "@/components";

import type { InfoProps } from "./types";

import styles from "./Info.module.scss";


export function Info({ product }: InfoProps) {
  const [price, wasPrice] = usePrice([product.price, product.wasPrice]);
  const [, dispatch] = useCart();

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <Typography variant="h3">{product.name}</Typography>
        <Rating rating={product.rating.value} />
      </div>

      <div className={styles.price}>
        <Typography variant="label" color="black">
          {price}
        </Typography>
        <Typography
          variant="label"
          modifier="small"
          color="primary"
          decoration="line-through"
        >
          {wasPrice}
        </Typography>
      </div>

      <Typography
        variant="body"
        color="grey-3"
        isLato
        className={styles.description}
      >
        {product.description}
      </Typography>

      <div className={styles.actions}>
        <Button
          variant="filled"
          onClick={() =>
            dispatch({ type: "ADD_ITEM", payload: { productId: product.id } })
          }
        >
          <Typography variant="subtitle" modifier="extra-small">
            Add To Cart
          </Typography>
        </Button>
        <Button variant="text" color="black" iconOnly rounded>
          <Icon name="heart" />
        </Button>
      </div>
    </div>
  );
}
