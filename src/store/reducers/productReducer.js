import { products } from "../../utils/data";

// state product awal data dari utils
const initialState = {
  products: products,
  carts: [],
};

// reducer
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "ADD_TO_CART":
      const itemInCart = state.carts.find((item) => item.id === payload);
      const newItemCart = state.products.find((item) => item.id === payload);
      // console.log("item", state.products);
      if (!itemInCart) {
        return {
          ...state,
          carts: [...state.carts, newItemCart],
        };
      } else {
        return state;
      }
  }
};

export default productReducer;
