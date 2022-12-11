import { useAppSelector } from "../../../hooks/redux";
import { selectShoppingCart } from "../../../store/shopping-cart";

export const useShoppingCartLogic = () => {
  const shoppingCart = useAppSelector(selectShoppingCart);

  return {
    state: {},
    actions: {},
    reducer: { shoppingCart },
  };
};
