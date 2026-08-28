import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNewProjectModalOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openNewProjectModal: (state) => { state.isNewProjectModalOpen = true; },
    closeNewProjectModal: (state) => { state.isNewProjectModalOpen = false; },
  },
});

export const { openNewProjectModal, closeNewProjectModal } = uiSlice.actions;
export default uiSlice.reducer;
