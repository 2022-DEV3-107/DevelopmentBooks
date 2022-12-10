import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectBooks, selectStatus } from "../../store/book";
import { getBooks } from "../../store/book/actions";

export const useHomeLogic = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const { loading, error } = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return {
    state: {},
    actions: {},
    reducer: { books, loading, error },
  };
};
