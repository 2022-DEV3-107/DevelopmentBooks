export class BookDTO {
  id: number = 0;
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
  price: number = 0;
}

export class CreateBookDTO {
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
  price: number = 0;
}

export class UpdateBookDTO {
  id: number = 0;
  title: string = "";
  author: string = "";
  imageUrl: string = "";
  publishedAt: string = "";
  price: number = 0;
}
