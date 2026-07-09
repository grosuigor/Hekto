import clsx from "clsx/lite";

import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";

import { useProductActions } from "./hooks";
import type { ProductActionsProps } from "./types";

import styles from "./ProductActions.module.scss";

export function ProductActions({
  id,
  image,
  direction,
  style,
  className,
}: ProductActionsProps) {
  const {
    modalShowed,
    isInCart,
    isInWishlist,
    addToCart,
    addToWishlist,
    openModal,
    closeModal,
  } = useProductActions(id);

  return (
    <div
      style={style}
      className={clsx(
        className,
        styles["product-actions"],
        styles[`product-actions--${direction}`],
      )}
    >
      <Button variant="text" color="grey-2" rounded onClick={addToCart}>
        <Icon name={isInCart ? "cart-filled" : "cart"} />
      </Button>
      <Button variant="text" color="grey-2" rounded onClick={addToWishlist}>
        <Icon name={isInWishlist ? "heart-filled" : "heart"} />
      </Button>
      <Button variant="text" color="grey-2" rounded onClick={openModal}>
        <Icon name="magnifier" />
      </Button>
      <Modal open={modalShowed} image={image} onClose={closeModal} />
    </div>
  );
}
