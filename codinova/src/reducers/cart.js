const initState = {
  items: []
};
const cart = (state = initState, action) => {
  let currentItems = state.items;
  let foundIndex;
  let productName;
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("add to cart");
      let newItem = action.payload;
      newItem["qty"] = newItem["qty"] ? parseInt(newItem["qty"]) + 1 : 1;
      foundIndex = currentItems.findIndex(item => item.name === newItem.name);
      console.log("foo", foundIndex);
      if (foundIndex !== -1) {
        currentItems[foundIndex] = newItem;
      } else {
        currentItems.push(newItem);
      }

      return {
        ...state,
        items: [...currentItems]
      };
    case "INCREASE_QTY":
      productName = action.payload;
      foundIndex = currentItems.findIndex(item => item.name === productName);
      currentItems[foundIndex]["qty"] = currentItems[foundIndex]["qty"] + 1;
      return {
        ...state,
        items: [...currentItems]
      };
    case "DECREASE_QTY":
      productName = action.payload;
      foundIndex = currentItems.findIndex(item => item.name === productName);
      currentItems[foundIndex]["qty"] = currentItems[foundIndex]["qty"] - 1;
      if (currentItems[foundIndex]["qty"] === 0) {
        currentItems.splice(foundIndex, 1);
      }
      return {
        ...state,
        items: [...currentItems]
      };
    case "DELETE_PRODUCT":
      productName = action.payload;
      foundIndex = currentItems.findIndex(item => item.name === productName);
      currentItems.splice(foundIndex, 1);
      return {
        ...state,
        items: [...currentItems]
      };
    case "RESET_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cart;
