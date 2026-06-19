import { Button } from "@/components/clickable";
import { Icon } from "@/components/icon";
import { Modal } from "@/components/modal";
import { useCart, useWishlist } from "@/hooks";
import type { ComponentWithoutChildrenProps } from "@/types";
import clsx from "clsx/lite";
import { type UIEvent, useCallback, useState } from "react";
import styles from "./ProductActions.module.scss";

export type ProductActionsProps = ComponentWithoutChildrenProps & {
  id: string;
  image: string;
  direction: "row" | "column";
};

export function ProductActions({
  id,
  image,
  direction,
  style,
  className,
}: ProductActionsProps) {
  const [, dispatchCart] = useCart();
  const [, dispatchWishlist] = useWishlist();
  const [modalShowed, showModal] = useState(false);

  const addToCart = useCallback(
    (e: UIEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dispatchCart({ type: "ADD_ITEM", payload: { productId: id } });
    },
    [dispatchCart, id],
  );

  const addToWishlist = useCallback(
    (e: UIEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dispatchWishlist({ type: "ADD_ITEM", payload: { productId: id } });
    },
    [dispatchWishlist, id],
  );

  const openModal = useCallback((e: UIEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showModal(true);
  }, []);

  const closeModal = useCallback((e: UIEvent) => {
    e.preventDefault();
    showModal(false);
  }, []);

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
