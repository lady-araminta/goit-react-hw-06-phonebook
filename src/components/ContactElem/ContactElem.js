// import PropTypes from 'prop-types';
import { Button, Td, Tr } from '@chakra-ui/react';

export const ContactElem = ({ id, name, number }) => {
  return (
    <Tr key={id}>
      <Td>{name} Galya</Td>
      <Td>{number} 067-234-34-51</Td>
      <Td>
        <Button
          type="button"
          children="Delete"
          color="white"
          backgroundColor="teal.300"
          borderColor="teal.300"
        />
      </Td>
    </Tr>
  );
};

// ContactElem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
