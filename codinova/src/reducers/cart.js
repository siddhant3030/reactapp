const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "DELETE_TO_CART":
      state = state.filter(x => x.name !== action.payload);
      return state;
    default:
      return state;
  }
};

export default cart;
