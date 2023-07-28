import { createSlice } from "@reduxjs/toolkit";

interface CategorySelectState {
  categoryList: string[];
}

const initialState: CategorySelectState = {
  categoryList: ["Task", "Random Thought", "Idea"],
};

const categorySlice = createSlice({
  name: "categorySelect",
  initialState,
  reducers: {},
});

export const categoryReducer = categorySlice.reducer;
