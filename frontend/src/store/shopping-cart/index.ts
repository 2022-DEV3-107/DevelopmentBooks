import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ShoppingCart } from "../../core/entities/shopping-cart";

interface ShoppingCartState {
  cart: ShoppingCart;
  loading: boolean;
  error: string | null | undefined;
}

// Define the initial state using that type
const initialState: ShoppingCartState = {
  cart: new ShoppingCart(),
  loading: false,
  error: null,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateBasket: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateBasket } = shoppingCartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectShoppingCart = (state: RootState) => state.shoppingCart.cart;

export const selectStatus = (state: RootState) => {
  return {
    loading: state.shoppingCart.loading,
    error: state.shoppingCart.error,
  };
};

export default shoppingCartSlice.reducer;
