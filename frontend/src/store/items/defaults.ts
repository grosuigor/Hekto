function createDefaultItemsState() {
  return {
    items: [],
    isPending: true,
  };
}

export const defaultCartState = createDefaultItemsState();
export const defaultWishlistState = createDefaultItemsState();