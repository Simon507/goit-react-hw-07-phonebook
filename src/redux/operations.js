import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://642b0258b11efeb759a87489.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'tasks/postAll',
  async (addValue, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, {
        id: addValue.id,
        name: addValue.name,
        phone: addValue.phone,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'tasks/deleteAll',
  async (item, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${item}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
