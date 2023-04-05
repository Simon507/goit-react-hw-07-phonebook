import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContacts, deleteContacts } from './operations';

const editingInitialState = {
  contactList: [],
  isLoading: false,
  error: null,
};

const isPending = state => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const editingSlice = createSlice({
  name: 'contactList',
  initialState: editingInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, isPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactList = action.payload;
      })
      .addCase(fetchContacts.rejected, isRejected)

      .addCase(addContacts.pending, isPending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactList.push(action.payload);
      })
      .addCase(addContacts.rejected, isRejected)

      .addCase(deleteContacts.pending, isPending)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactList.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactList.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, isRejected),
});

export const editingReducer = editingSlice.reducer;
