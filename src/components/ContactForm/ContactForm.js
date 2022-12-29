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

export const ContactForm = () => {
  return (
    <Card maxW="sm" ml="auto" mr="auto" mt="48px" mb="48px">
      <CardHeader>
        <Heading textAlign="center" color="teal.400">
          Phonebook
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack>
          <InputGroup>
            <InputLeftAddon
              children="Name"
              color="white"
              backgroundColor="teal.300"
              borderColor="teal.300"
            />
            <Input
              focusBorderColor="teal.300"
              size="md"
              //   onChange={handleChange}
              //   value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children="Tel"
              color="white"
              backgroundColor="teal.300"
              borderColor="teal.300"
            />
            <Input
              focusBorderColor="teal.300"
              size="md"
              //   onChange={handleChange}
              //   value={number}
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
        <Button
          type="submit"
          children="Add contact"
          width={120}
          color="white"
          backgroundColor="teal.300"
          borderColor="teal.300"
        />
      </CardFooter>
    </Card>
  );
};
