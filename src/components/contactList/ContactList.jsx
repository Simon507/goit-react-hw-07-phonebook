import { useSelector, useDispatch } from 'react-redux';

import { selectContactList, selectFindTarget } from '../../redux/selectors';

import { deleteFromList } from '../../redux/editingSlice';

import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = () => {
  const value = useSelector(selectContactList);

  const find = useSelector(selectFindTarget);

  const dispatch = useDispatch();

  const onDelete = item => {
    dispatch(deleteFromList(item));
  };

  return (
    <>
      <ContactLst>
        {value.length > 0 ? (
          value.map(
            item =>
              item.name
                .toLowerCase()
                .includes(find.toString().toLowerCase()) && (
                <ContactCard className="item" key={item.id}>
                  <p>{item.name}</p>
                  <p>{item.number}</p>
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
