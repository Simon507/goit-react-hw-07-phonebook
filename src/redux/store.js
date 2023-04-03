import { configureStore } from '@reduxjs/toolkit';

import { editingReducer } from './editingSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactList: editingReducer,
    filters: filterReducer,
  },
});
