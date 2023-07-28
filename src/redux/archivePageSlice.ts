import { createSlice } from "@reduxjs/toolkit";

interface ArchivePageState {
  archivePage: boolean;
}

const initialState: ArchivePageState = {
  archivePage: false,
};

const archivePageSlice = createSlice({
  name: "archivePage",
  initialState,
  reducers: {
    toggleArchivePage: {
      reducer(state) {
        state.archivePage = !state.archivePage;
      },
      prepare() {
        return { payload: {} };
      },
    },
  },
});

export const { toggleArchivePage } = archivePageSlice.actions;
export const archivePageReducer = archivePageSlice.reducer;
