import { Box } from '@chakra-ui/react';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return (
    <Box maxW="1200px" mr="auto" ml="auto">
      <ContactForm />
    </Box>
  );
};
