import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./book";

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
