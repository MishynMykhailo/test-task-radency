import { configureStore } from "@reduxjs/toolkit";

import { modalReducer } from "./modalSlice";
import { categoryReducer } from "./categoryReducer";
import { archivePageReducer } from "./archivePage";
import { todoReducer } from "./todoSlice";
// Начальное значение состояния Redux для корневого редюсера,
// если не передать параметр preloadedState.

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    modal: modalReducer,
    categorySelect: categoryReducer,
    archivePage: archivePageReducer,
  },
});
