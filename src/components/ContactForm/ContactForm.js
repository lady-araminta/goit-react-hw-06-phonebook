import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { useState } from 'react';
import { getContacts } from 'redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const existingName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.find(contact => contact.number === number);
    if (existingName) {
      toast(name + ' is already in contacts.');
      return;
    } else if (existingNumber) {
      toast(number + ' is already in contacts.');
      return;
    }
    dispatch(addContact(name, number));
    reset();
  };
  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading textAlign="center">Phonebook</Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <InputGroup onSubmit={handleSubmit}>
            <InputLeftAddon children="Name" />
            <Input
              size="md"
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="Tel" />
            <Input
              size="md"
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </Stack>
      </CardBody>
      <CardFooter justifyContent="center">
        <Button type="submit" children="Add contact" width={120} />
      </CardFooter>
    </Card>
  );
};
