import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./book";
import shoppingCartReducer from "./shopping-cart";

const rootReducer = combineReducers({
  book: bookReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
