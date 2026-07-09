import clsx from "clsx/lite";

import { Image } from "@/components/image";

import { CardAction } from "../../action";
import { CardContainer } from "../../CardContainer";
import { ProductActions } from "../actions";
import { Sale } from "./sale";
import type { ProductCardContainerProps } from "./types";

import styles from "./ProductCardContainer.module.scss";

export function ProductCardContainer({
  product,
  showSale = true,
  showActions = true,
  showButton = true,
  actionProps,
  style,
  className,
  children,
}: ProductCardContainerProps) {
  return (
    <CardContainer
      id={product.id}
      style={style}
      className={clsx(styles.card, className)}
    >
      <div className={styles["img-container"]}>
        <Image
          src={product.thumbnail}
          alt={product.name}
          skeletonProps={{ style: { width: "100%", aspectRatio: 16 / 9 } }}
        />
        {showSale && <Sale isSale={product.isSale} />}
        {showActions && (
          <ProductActions
            id={product.id}
            image={product.thumbnail}
            {...actionProps}
          />
        )}
        {showButton && (
          <CardAction variant="Details" to={`/products/${product.id}`} />
        )}
      </div>
      {children}
    </CardContainer>
  );
}
