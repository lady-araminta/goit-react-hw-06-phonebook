import { ContactElem } from 'components/ContactElem/ContactElem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const users = useSelector(state => state.contacts);
  return (
    <ul>
      {users.map(users => (
        <ContactElem
          key={users.id}
          users={users}
          //   onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
