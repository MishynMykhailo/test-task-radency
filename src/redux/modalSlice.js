import { createSlice } from "@reduxjs/toolkit";
// import {} from "./operations";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    modalActive: false,
    modalContent: null,
  },
  reducers: {
    toggleModal: {
      reducer(state, _) {
        state.modalActive = !state.modalActive;
      },
    },
  },
});
export const { toggleModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
