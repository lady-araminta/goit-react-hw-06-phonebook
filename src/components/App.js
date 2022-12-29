import { Box } from '@chakra-ui/react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};
