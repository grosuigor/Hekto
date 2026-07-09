import { type UIEvent, useCallback, useMemo, useState } from "react";

import { useCart, useWishlist } from "@/hooks";
import { useCartContext, useWishlistContext } from "@/store";

export function useProductActions(id: string) {
  const [, dispatchCart] = useCart();
  const [, dispatchWishlist] = useWishlist();
  const { items: cartItems } = useCartContext();
  const { items: wishlistItems } = useWishlistContext();
  const [modalShowed, showModal] = useState(false);

  const isInCart = useMemo(
    () => cartItems.find((item) => item.productId === id) !== undefined,
    [cartItems, id],
  );

  const isInWishlist = useMemo(
    () => wishlistItems.find((item) => item.productId === id) !== undefined,
    [wishlistItems, id],
  );

  const toggleInCart = useCallback(
    (e: UIEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isInCart) {
        dispatchCart({ type: "REMOVE_ITEM", payload: { productId: id } });
      } else {
        dispatchCart({ type: "ADD_ITEM", payload: { productId: id } });
      }
    },
    [dispatchCart, id, isInCart],
  );

  const toggleInWishlist = useCallback(
    (e: UIEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isInWishlist) {
        dispatchWishlist({ type: "REMOVE_ITEM", payload: { productId: id } });
      } else {
        dispatchWishlist({ type: "ADD_ITEM", payload: { productId: id } });
      }
    },
    [dispatchWishlist, id, isInWishlist],
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

  return {
    modalShowed,
    isInCart,
    isInWishlist,
    toggleInCart,
    toggleInWishlist,
    openModal,
    closeModal,
  };
}
