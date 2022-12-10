import { UpdateBookDTO } from "../../../entities/book/types";
import { client } from "../../HttpClient";
import responseHandler from "../../../helpers/response";

export const getBook = async (id: number): Promise<any> => {
  const response = await client.get(`books/${id}`);

  responseHandler(response);
};

export const getBooks = async (): Promise<any> => {
  const response = await client.get("books");

  responseHandler(response);
};

export const createBook = async (payload: object): Promise<any> => {
  const response = await client.post("books", payload);

  responseHandler(response);
};

export const updateBook = async (payload: UpdateBookDTO): Promise<any> => {
  const response = await client.put(`books/${payload.id}`, payload);

  responseHandler(response);
};

export const deleteBook = async (id: number): Promise<any> => {
  const response = await client.delete(`books/${id}`);

  responseHandler(response);
};
