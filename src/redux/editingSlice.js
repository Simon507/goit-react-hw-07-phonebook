import { createSlice } from '@reduxjs/toolkit';

// для хранилища
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const editingInitialState = {
  contactList: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const editingSlice = createSlice({
  name: 'contactList',
  initialState: editingInitialState,
  reducers: {
    addContactList: {
      reducer(state, action) {
        state.contactList.push(action.payload);
      },

      prepare(friendId, friendName, friendNumber) {
        return {
          payload: {
            id: friendId,
            name: friendName,
            number: friendNumber,
          },
        };
      },
    },

    deleteFromList(state, action) {
      state.contactList.splice(action.payload, 1);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['contactList'],
};

export const persistedEditingReducer = persistReducer(
  persistConfig,
  editingSlice.reducer
);

export const { addContactList, deleteFromList } = editingSlice.actions;
