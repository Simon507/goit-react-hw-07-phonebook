import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filters: {
    findTarget: '',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState.filters,
  reducers: {
    findTarget(state, action) {
      return { findTarget: action.payload };
    },
  },
});

export const { findTarget } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
