import { createSlice } from "@reduxjs/toolkit";


const archivePageSlice = createSlice({
  name: "archivePage",
  initialState: {
    archivePage: false,
  },
  reducers: {
    toggleArchivePage: {
      reducer(state, _) {
        state.archivePage = !state.archivePage;
      },
    },
  },
});
export const { toggleArchivePage } = archivePageSlice.actions;

export const archivePageReducer = archivePageSlice.reducer;
