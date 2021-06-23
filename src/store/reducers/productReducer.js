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

    // acton tambah di kelola reducer
    case "INCREMENT":
      // console.log(state.products.find((item) => item.id === payload).price);
      const originalPrice = state.products.find(
        (item) => item.id === payload
      ).price;
      const incCart = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: incCart,
      };

    // action pengurangan yang di kelola reducer
    case "DECREMENT":
      const orilPrice = state.products.find(
        (item) => item.id === payload
      ).price;
      const decCart = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price - orilPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: decCart,
      };

    // Reducer remove
    case "REMOVE":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };

    // Reducer reset
    case "RESET":
      return {
        ...state,
        carts: [],
      };
  }
};

export default productReducer;
