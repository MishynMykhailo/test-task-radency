import { RootState } from "./interfaces";

const getTodoValueState = (state: RootState) => state.todo;
const getModalValueState = (state: RootState) => state.modal;
const getCategorySelectValueState = (state: RootState) => state.categorySelect;
const getArchivePageValueState = (state: RootState) => state.archivePage;

export {
  getTodoValueState,
  getModalValueState,
  getCategorySelectValueState,
  getArchivePageValueState,
};
