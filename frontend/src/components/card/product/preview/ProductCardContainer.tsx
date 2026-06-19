import { Image } from "@/components/image";
import type { ComponentProps, PreviewProduct } from "@/types";
import clsx from "clsx/lite";
import { CardButton } from "../../button";
import { CardContainer } from "../../CardContainer";
import { ProductActions, type ProductActionsProps } from "../actions";
import styles from "./ProductCardContainer.module.scss";
import { Sale } from "./sale";

type ProductCardContainerProps = ComponentProps & {
  product: PreviewProduct;
  showSale?: boolean;
  showActions?: boolean;
  showButton?: boolean;
  actionProps: Omit<ProductActionsProps, "id" | "image">;
};

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
        {showButton && <CardButton variant="Details" />}
      </div>
      {children}
    </CardContainer>
  );
}
