import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Book } from "../../core/entities/book";

interface BasketItem {
  item: Book;
  quantity: number;
}

interface ShoppingCartState {
  items: BasketItem[];
  subTotal: number;
  discount: number;
  total: number;
  loading: boolean;
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: ShoppingCartState = {
  items: [],
  subTotal: 0,
  discount: 0,
  total: 0,
  loading: false,
  error: null,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (basketItem) => basketItem.item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.items.push({
          item: action.payload,
          quantity: 1,
        });
      } else {
        state.items[itemIndex].quantity++;
      }
      state.subTotal += action.payload.price;
      state.total = state.subTotal - state.discount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket } = shoppingCartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectShoppingCart = (state: RootState) => {
  return {
    items: state.shoppingCart.items,
    subTotal: state.shoppingCart.subTotal,
    discount: state.shoppingCart.discount,
    total: state.shoppingCart.total,
  };
};

export const selectStatus = (state: RootState) => {
  return {
    loading: state.shoppingCart.loading,
    error: state.shoppingCart.error,
  };
};

export default shoppingCartSlice.reducer;
