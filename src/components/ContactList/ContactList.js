import { Table, TableContainer, Tbody } from '@chakra-ui/react';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const users = useSelector(state => state.contacts);
  return (
    <TableContainer maxW="sm" ml="auto" mr="auto">
      <Table variant="simple" colorScheme="teal" size="sm">
        <Tbody>
          {users.map(users => (
            <ContactElem
              key={users.id}
              users={users}
              //   onDelete={onDelete}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
