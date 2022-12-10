import { Book } from "../../entities/book";
import { BookRepository } from "../../entities/book/repository";
import { CreateBookDTO, UpdateBookDTO } from "../../entities/book/types";

export interface BookService {
  GetBooks(): Promise<Book[]>;
  GetBook(id: number): Promise<Book>;
  CreateBook(data: CreateBookDTO): Promise<Book>;
  UpdateBook(data: UpdateBookDTO): Promise<Book>;
  DeleteBook(id: number): Promise<number>;
}

export class BookServiceImpl implements BookService {
  repo: BookRepository;

  constructor(repo: BookRepository) {
    this.repo = repo;
  }

  async GetBooks(): Promise<Book[]> {
    return this.repo.GetAll();
  }

  async GetBook(id: number): Promise<Book> {
    return this.repo.GetById(id);
  }

  async CreateBook(data: CreateBookDTO): Promise<Book> {
    return this.repo.Create(data);
  }

  async UpdateBook(data: UpdateBookDTO): Promise<Book> {
    return this.repo.Update(data);
  }

  async DeleteBook(id: number): Promise<number> {
    return this.repo.Delete(id);
  }
}
