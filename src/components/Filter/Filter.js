// import PropTypes from 'prop-types';

import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { AiOutlineFilter } from 'react-icons/ai';

export const Filter = () => {
  return (
    <Stack maxW="sm" ml="auto" mr="auto">
      <Heading textAlign="center" color="teal.400" mb="16px">
        Contacts
      </Heading>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineFilter color="teal.700" />}
        />
        <Input
          focusBorderColor="teal.300"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Fined contacts by name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputGroup>
    </Stack>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
