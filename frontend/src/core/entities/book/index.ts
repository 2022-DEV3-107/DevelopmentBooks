export class Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  publishedAt: string;
  price: number;

  constructor(
    id: number,
    title: string,
    author: string,
    imageUrl: string,
    publishedAt: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
    this.publishedAt = publishedAt;
    this.price = price;
  }
}
