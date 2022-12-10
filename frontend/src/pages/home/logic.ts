import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectBooks, selectStatus } from "../../store/book";
import { getBooks } from "../../store/book/actions";
import { addToBasket } from "../../store/shopping-cart";

export const useHomeLogic = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const { loading, error } = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return {
    state: {},
    actions: {
      addToBasket: (book: any) => dispatch(addToBasket(book)),
    },
    reducer: { books, loading, error },
  };
};
