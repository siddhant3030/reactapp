const initState = {
  items: []
};
const cart = (state = initState, action) => {
  let currentItems = state.items;
  let foundIndex;
  let filteredItems;
  let productName;
  let foundItem;
  switch (action.type) {
    case "ADD_TO_CART":
      let newItem = action.payload;
      newItem["qty"] = newItem["qty"] ? parseInt(newItem["qty"]) + 1 : 1;
      filteredItems = currentItems.filter(item => item.name !== newItem.name);
      return {
        ...state,
        items: [...filteredItems, newItem]
      };
    case "INCREASE_QTY":
      productName = action.payload;
      foundIndex = currentItems.findIndex(item => item.name == productName);
      currentItems[foundIndex]["qty"] = currentItems[foundIndex]["qty"] + 1;
      return {
        ...state,
        items: [...currentItems]
      };
    case "DECREASE_QTY":
      productName = action.payload;
      foundIndex = currentItems.findIndex(item => item.name == productName);
      currentItems[foundIndex]["qty"] = currentItems[foundIndex]["qty"] - 1;
      if (currentItems[foundIndex]["qty"] === 0) {
        currentItems.splice(foundIndex, 1);
      }
      return {
        ...state,
        items: [...currentItems]
      };

    default:
      return state;
  }
};

export default cart;
