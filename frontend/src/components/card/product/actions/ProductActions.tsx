import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";
import type { ProductActionsProps } from "./types";
import clsx from "clsx/lite";
import styles from "./ProductActions.module.scss";
import { useProductActions } from "./hooks";

export function ProductActions({
  id,
  image,
  direction,
  style,
  className,
}: ProductActionsProps) {
  const { modalShowed, addToCart, addToWishlist, openModal, closeModal } = useProductActions(id);

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
        <Icon name="cart" />
      </Button>
      <Button variant="text" color="grey-2" rounded onClick={addToWishlist}>
        <Icon name="heart" />
      </Button>
      <Button variant="text" color="grey-2" rounded onClick={openModal}>
        <Icon name="magnifier" />
      </Button>
      <Modal open={modalShowed} image={image} onClose={closeModal} />
    </div>
  );
}
