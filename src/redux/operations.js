import axios from 'axios';

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './editingSlice';

axios.defaults.baseURL = 'https://642b0258b11efeb759a87489.mockapi.io';

export const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};
