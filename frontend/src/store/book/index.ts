import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../core/entities/book";
import type { RootState } from "../../store";
import { getBooks, getBook } from "./actions";

interface BookState {
  book: Book;
  books: Book[];
  loading: boolean;
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: BookState = {
  book: {
    id: 0,
    title: "",
    author: "",
    imageUrl: "",
    publishedAt: "",
  },
  books: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBooks.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.books = payload;
    });
    builder.addCase(getBooks.rejected, (state, { error }) => {
      state.loading = false;
      if (error !== undefined) state.error = error.message;
    });
    builder.addCase(getBook.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getBook.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.book = payload;
    });
    builder.addCase(getBook.rejected, (state, { error }) => {
      state.loading = false;
      if (error !== undefined) state.error = error.message;
    });
  },
});

//export const {} = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBooks = (state: RootState) => state.book.books;

export const selectActivity = (state: RootState) => state.book.book;

export const selectStatus = (state: RootState) => {
  return { loading: state.book.loading, error: state.book.error };
};

export default bookSlice.reducer;
