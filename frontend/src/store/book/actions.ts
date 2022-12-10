import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../../core/entities/book";
import { BookRepositoryImpl } from "../../core/infrastructure/book/repository-impl";
import { BookServiceImpl } from "../../core/usecases/book/service";
import { FetchError } from "../types";

const getService = () => {
  const repo = new BookRepositoryImpl();
  const service = new BookServiceImpl(repo);
  return service;
};

export const getBooks = createAsyncThunk<
  Book[],
  void,
  { rejectValue: FetchError }
>("book/getAll", async (_, thunkApi) => {
  try {
    const service = getService();
    return service.GetBooks();
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch books.",
    });
  }
});

export const getBook = createAsyncThunk<
  Book,
  number,
  { rejectValue: FetchError }
>("book/getById", async (id, thunkApi) => {
  try {
    const service = getService();
    return service.GetBook(id);
  } catch (error) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch book.",
    });
  }
});
