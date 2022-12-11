import { BasketItem, ShoppingCart } from "../core/entities/shopping-cart";
import { Book } from "../core/entities/book";

interface DiscountRatesType {
  2: number;
  3: number;
  4: number;
  5: number;
}

const DiscountRates: DiscountRatesType = {
  2: 5,
  3: 10,
  4: 20,
  5: 25,
};
export const useShoppingCart = () => {
  const add = (cart: ShoppingCart, item: Book) => {
    const itemIndex = cart.findItemIndex(item.id);

    if (itemIndex === -1) {
      cart.add(new BasketItem(item, 1));
    } else {
      cart.items[itemIndex].updateQuantity(cart.items[itemIndex].quantity + 1);
    }
    const discountTotal = calculateDiscountTotal(cart.items);

    cart.subTotal += item.price;
    cart.discount = discountTotal > 0 ? cart.subTotal - discountTotal : 0;
    cart.total =
      discountTotal > 0 ? discountTotal : cart.subTotal - cart.discount;

    return new ShoppingCart(
      cart.items,
      cart.subTotal,
      cart.discount,
      cart.total
    );
  };

  const calculateDiscountTotal = (items: BasketItem[]) => {
    let discountTotal = 0;

    if (items.length > 1) {
      const diffCount = findDifferentItemCount(items);
      if (diffCount > 1) {
        const discountGroups = groupItems(items);
        discountTotal = calculateTotal(discountGroups, items);
      }
    }

    return discountTotal;
  };

  const calculateTotal = (groups: Array<number[]>, items: BasketItem[]) => {
    let total = 0;
    for (let i = 0; i < groups.length; i++) {
      const itemCount = groups[i].length;
      const rate = DiscountRates[itemCount as keyof DiscountRatesType] | 0;
      const groupSubTotal = calculateGroupSubTotal(groups[i], items); //itemCount * 50;
      const groupDiscount = (groupSubTotal * rate) / 100;
      const groupTotal = groupSubTotal - groupDiscount;
      total += groupTotal;
    }
    return total;
  };

  const calculateGroupSubTotal = (group: number[], items: BasketItem[]) => {
    let total = 0;
    group.forEach((id) => {
      const basketItem = items.find((bitem) => bitem.item.id === id);
      total += basketItem ? basketItem.item.price : 0;
    });
    return total;
  };

  const groupItems = (items: BasketItem[]) => {
    let groups: Array<number[]> = [];

    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < items[i].quantity; j++) {
        const id = items[i].item.id;
        if (groups.length === 0) groups.push([id]);
        else {
          let group = groups.find((group) => group.indexOf(id) === -1);
          if (group) group?.push(id);
          else groups.push([id]);
        }
      }
    }

    return groups;
  };

  const findDifferentItemCount = (items: BasketItem[]): number => {
    const unique = items
      .map((basketItem) => basketItem.item.id)
      .filter((value, index, self) => self.indexOf(value) === index);

    const length = unique.length;

    return length;
  };

  return {
    state: {},
    actions: {
      add,
    },
  };
};
