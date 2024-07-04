import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../pages/Products";

export type cartItem = {
  product: ProductType;
  amount: number;
};

const initialState: {
  value: cartItem[];
} = {
  value: [],
};

export const cartSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    clearCart: (state) => {
      console.log("Hello");
      state.value = [];
    },
    updateCart: (
      state,
      {
        payload: { amount, prod },
      }: PayloadAction<{ amount: number; prod: ProductType }>
    ) => {
      console.log(state.value);

      // num === 0
      if (amount === 0) {
        const newCart = state.value.filter(
          (currItem) => currItem.product.id !== prod.id
        );
        state.value = newCart;
      }

      // num > 0
      if (amount > 0) {
        const index = state.value.findIndex(
          (currItem) => currItem.product.id === prod.id
        );

        if (index > -1) {
          state.value[index].amount = amount;
        } else {
          state.value.push({
            amount,
            product: prod,
          });
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
