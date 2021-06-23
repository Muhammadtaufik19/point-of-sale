import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer
import rootReducer from "./reducers/rootReducer";

// store
const store = createStore(rootReducer, composeWithDevTools());

export default store;
