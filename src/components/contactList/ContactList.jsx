import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';

import {
  selectContactList,
  selectFindTarget,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

import { fetchContacts, deleteContacts } from 'redux/operations';

import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  // Рендерим розмітку в залежності від значень у стані

  const value = useSelector(selectContactList);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  console.log(value);
  console.log(isLoading);
  console.log(isError);

  const find = useSelector(selectFindTarget);

  // const dispatch = useDispatch();

  const onDelete = item => {
    dispatch(deleteContacts(item));
    // dispatch(fetchContacts());
  };

  return (
    <>
      <ContactLst>
        {isLoading && <p>Loading tasks...</p>}
        {isError && <p>{isError}</p>}
        {value.length > 0 ? (
          value.map(
            item =>
              item.name
                .toLowerCase()
                .includes(find.toString().toLowerCase()) && (
                <ContactCard className="item" key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.phone}</p>
                  <button onClick={() => onDelete(item.id)}>Delete</button>
                </ContactCard>
              )
          )
        ) : (
          <p>В записях нет ни одного контакта</p>
        )}
      </ContactLst>
    </>
  );
};
