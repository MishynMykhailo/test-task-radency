import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalSlice";
import { categoryReducer } from "./categorySlice";
import { archivePageReducer } from "./archivePageSlice";
import { todoReducer } from "./todoSlice";



export const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
    categorySelect: categoryReducer,
    archivePage: archivePageReducer,
  },
});
