import { Typography } from "@/components/typography";
import { usePrice } from "@/hooks";
import type { ProductCardProps, ComponentProps } from "@/types";
import { ProductCardContainer } from "../ProductCardContainer";
import styles from "./FeaturedProductCard.module.scss";
import clsx from "clsx";

export function FeaturedProductCard({
  product,
  style,
  className,
  children,
}: ProductCardProps & ComponentProps) {
  const price = usePrice(product.price);

  return (
    <ProductCardContainer
      showSale={false}
      product={product}
      style={style}
      className={clsx(styles.card, className)}
      actionProps={{ direction: "row" }}
    >
      <div className={styles.content}>
        <Typography
          variant="label"
          modifier="bold"
          color="primary"
          className={styles.title}
        >
          {product.name}
        </Typography>
        <div className="grower" />
        <Typography variant="label" modifier="small" color="grey-3">
          Code - {product.code}
        </Typography>
        <Typography variant="label" modifier="bold" color="black">
          {price}
        </Typography>
      </div>
      {children}
    </ProductCardContainer>
  );
}
