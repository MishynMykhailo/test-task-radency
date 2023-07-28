import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modalActive: boolean;
  modalContent: any; // Замените any на тип содержимого модального окна, если это возможно
}

const initialState: ModalState = {
  modalActive: false,
  modalContent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: {
      reducer(state) {
        state.modalActive = !state.modalActive;
      },
      prepare() {
        return { payload: {} };
      },
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
