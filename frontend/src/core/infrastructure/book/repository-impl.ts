import services from "../Services";
import { serializeDTO } from "../../helpers/serialize";
import { BookRepository } from "../../entities/book/repository";
import { Book } from "../../entities/book";
import {
  CreateBookDTO,
  BookDTO,
  UpdateBookDTO,
} from "../../entities/book/types";

export class BookRepositoryImpl implements BookRepository {
  async GetAll(): Promise<Book[]> {
    const items = await services.api.getBooks();

    return items.map(
      (item: BookDTO) =>
        new Book(
          item.id,
          item.title,
          item.author,
          item.imageUrl,
          item.publishedAt,
          item.price
        )
    );
  }

  async GetById(id: number): Promise<Book> {
    const item = await services.api.getBook(id);

    return new Book(
      item.id,
      item.title,
      item.author,
      item.imageUrl,
      item.publishedAt,
      item.price
    );
  }

  async Create(data: CreateBookDTO): Promise<Book> {
    const serializedData = serializeDTO(CreateBookDTO, data);

    const item: BookDTO = await services.api.createBook(serializedData);
    return new Book(
      item.id,
      item.title,
      item.author,
      item.imageUrl,
      item.publishedAt,
      item.price
    );
  }

  async Update(data: UpdateBookDTO): Promise<Book> {
    const serializedData = serializeDTO(UpdateBookDTO, data);

    const item: BookDTO = await services.api.updateBook(serializedData);
    return new Book(
      item.id,
      item.title,
      item.author,
      item.imageUrl,
      item.publishedAt,
      item.price
    );
  }

  async Delete(id: number): Promise<number> {
    await services.api.deleteBook(id);

    return id;
  }
}
