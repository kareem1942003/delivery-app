import { createSlice } from "@reduxjs/toolkit";

const feedBackSlice = createSlice({
  initialState: [],
  name: "feedBackSlice",
  reducers: {
    addToFeedBack: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const feedBackAction = feedBackSlice.actions;
export default feedBackSlice;
