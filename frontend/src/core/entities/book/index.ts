export class Book {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  publishedAt: string;

  constructor(
    id: number,
    title: string,
    author: string,
    imageUrl: string,
    publishedAt: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.imageUrl = imageUrl;
    this.publishedAt = publishedAt;
  }
}
