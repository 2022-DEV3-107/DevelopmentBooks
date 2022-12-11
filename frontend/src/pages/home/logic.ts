import { useEffect } from "react";
import { Book } from "../../core/entities/book";
import { ShoppingCart } from "../../core/entities/shopping-cart";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { selectBooks, selectStatus } from "../../store/book";
import { getBooks } from "../../store/book/actions";
import { selectShoppingCart, updateBasket } from "../../store/shopping-cart";

export const useHomeLogic = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const shoppingCart = useAppSelector(selectShoppingCart);
  const { loading, error } = useAppSelector(selectStatus);

  const { actions } = useShoppingCart();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const addToBasket = (cart: ShoppingCart, item: Book) => {
    const newCart = actions.add(cart, item);
    dispatch(updateBasket(newCart));
  };

  return {
    state: {},
    actions: {
      addToBasket,
    },
    reducer: { books, shoppingCart, loading, error },
  };
};
