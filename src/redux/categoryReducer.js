import { createSlice } from "@reduxjs/toolkit";
// import {} from "./operations";

const categorySlice = createSlice({
  name: "categorySelect",
  initialState: {
    categoryList: ["Task", "Random Thought", "Idea"],
  },
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
