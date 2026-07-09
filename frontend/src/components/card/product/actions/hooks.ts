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

  return {
    modalShowed,
    isInCart,
    isInWishlist,
    addToCart,
    addToWishlist,
    openModal,
    closeModal,
  };
}
