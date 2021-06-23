import { combineReducers } from "redux";

// product reducer
import productReducer from "./productReducer";

// rootReducer
export default combineReducers({
  product: productReducer,
});
