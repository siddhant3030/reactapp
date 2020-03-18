export const addToCart = product => ({
  type: "ADD_TO_CART",
  payload: product
});

export const increaseQuantity = productName => ({
  type: "INCREASE_QTY",
  payload: productName
});

export const decreaseQuantity = productName => ({
  type: "DECREASE_QTY",
  payload: productName
});

export const deleteFromCart = product => ({
  type: "DELETE_TO_CART",
  payload: product
});

export const deleteProduct = productName => ({
  type: "DELETE_PRODUCT",
  payload: productName
});
