export class BookDTO {
  id: number = 0;
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
}

export class CreateBookDTO {
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
}

export class UpdateBookDTO {
  id: number = 0;
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
}
