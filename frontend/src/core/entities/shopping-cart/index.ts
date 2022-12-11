import { Book } from "../book";

export class BasketItem {
  item: Book;
  quantity: number;

  constructor(item: Book, quantity: number) {
    this.item = item;
    this.quantity = quantity;
  }

  updateQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }
}

export class ShoppingCart {
  items: BasketItem[];
  subTotal: number;
  discount: number;
  total: number;

  constructor(
    items: BasketItem[] = [],
    subTotal: number = 0,
    discount: number = 0,
    total: number = 0
  ) {
    this.items = items;
    this.subTotal = subTotal;
    this.discount = discount;
    this.total = total;
  }

  add(item: BasketItem) {
    this.items.push(item);
  }

  findItemIndex(id: number) {
    return this.items.findIndex((basketItem) => basketItem.item.id === id);
  }
}
