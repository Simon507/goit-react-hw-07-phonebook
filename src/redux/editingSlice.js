import { createSlice } from '@reduxjs/toolkit';

const editingInitialState = {
  contactList: [],
  isLoading: false,
  error: null,
};

const editingSlice = createSlice({
  name: 'contactList',
  initialState: editingInitialState,

  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.contactList = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactList,
  deleteFromList,
} = editingSlice.actions;

export const editingReducer = editingSlice.reducer;
