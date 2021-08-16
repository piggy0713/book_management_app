import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "../features/bookList/bookListSlice";

export const store = configureStore({
  reducer: {
    bookList: bookListReducer,
  },
});
