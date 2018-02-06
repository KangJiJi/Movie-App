import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers";

// Create a store using redux-thunk middleware and reducer.
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
