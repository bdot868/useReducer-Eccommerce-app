export function qtyReducer(state, action) {
  const newState = [...state];
  const idx = newState.findIndex(({ productId }) => productId === action.id);
  const selectedObj = { ...newState[idx] };

  switch (action.type) {
    case "increment_qty":
      let addQty = newState[idx].qty + 1;
      selectedObj.qty = addQty;
      newState.splice(idx, 1, selectedObj);
      return [...newState];

    case "decrement_qty":
      if (newState[idx].qty === 0) {
        return [...newState];
      }
      let qty = newState[idx].qty - 1;
      selectedObj.qty = qty;
      newState.splice(idx, 1, selectedObj);
      return [...newState];

    case "delete":
      newState.splice(action.id, 1);
      return [...newState];

    default:
      return [...newState];
  }
}
