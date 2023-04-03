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
    // addContactList: {
    //   reducer(state, action) {
    //     state.contactList.push(action.payload);
    //   },

    //   prepare(friendId, friendName, friendNumber) {
    //     return {
    //       payload: {
    //         id: friendId,
    //         name: friendName,
    //         number: friendNumber,
    //       },
    //     };
    //   },
    // },

    // deleteFromList(state, action) {
    //   state.contactList.splice(action.payload, 1);
    // },

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
