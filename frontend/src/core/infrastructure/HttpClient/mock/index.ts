import { AxiosInstance } from "axios";
import MockAdapter from "axios-mock-adapter";
import booksMock from "./data/books.mock.json";

export const mockInstance = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mock.onGet("/books").reply(200, booksMock.books);
  mock.onGet(/\/books\/\d+/).reply(function (config) {
    // the actual id can be grabbed from config.url
    const id: number = Number(config.url?.split("/")[1]);
    const book = booksMock.books.find((act) => act.id === id);
    return [200, book];
  });
};
