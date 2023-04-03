import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../redux/store';

import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from 'components/contactList/ContactList';

export const App = () => {
  return (
    <Provider store={store}>
      {/* подключаем локальное хранилище */}
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <GlobalStyle />
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Layout>
      </PersistGate>
    </Provider>
  );
};
