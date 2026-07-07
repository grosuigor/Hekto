import { useCallback, useState, type UIEvent } from "react";
import { useCart, useWishlist } from "@/hooks";

export function useProductActions(id: string) {
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

  return {
    modalShowed,
    addToCart,
    addToWishlist,
    openModal,
    closeModal,
  }
}