import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      console.log(current(state));
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state, action) => {
      // RTK - Either Mutate the existing State or return a new State

      state.items.length = 0;
    },
  },
});

// console.log("Actions: ", cartSlice.actions)

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
