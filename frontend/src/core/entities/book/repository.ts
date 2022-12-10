import { Book } from "./index";
import { CreateBookDTO, UpdateBookDTO } from "./types";

export interface BookRepository {
  GetAll(): Promise<Book[]>;
  GetById(id: number): Promise<Book>;
  Create(data: CreateBookDTO): Promise<Book>;
  Update(data: UpdateBookDTO): Promise<Book>;
  Delete(id: number): Promise<number>;
}
