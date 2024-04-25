/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./shopping-cart/CartSlice";

import cartUiSlice from "./shopping-cart/CartUiSlice";
import feedBackSlice from "./shopping-cart/FeedBackSlice";

export const store = configureStore({
  reducer: {
    // @ts-ignore
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    cartFeedback: feedBackSlice.reducer,
  },
});
