import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addToBasket, selectShoppingCart } from "../../../store/shopping-cart";

export const useShoppingCartLogic = () => {
  const dispatch = useAppDispatch();
  const shoppingCart = useAppSelector(selectShoppingCart);

  return {
    state: {},
    actions: {
      addToBasket: (book: any) => dispatch(addToBasket(book)),
    },
    reducer: { shoppingCart },
  };
};
