import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      return [...state, action.payload];
    },
    bookRemoved: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
    bookEdited: (state, action) => {
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    },
  },
});

export const { bookAdded, bookRemoved, bookEdited } = bookListSlice.actions;

export default bookListSlice.reducer;
