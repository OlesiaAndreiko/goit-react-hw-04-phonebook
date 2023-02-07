import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import initalContacts from '../components/contacts.json';
import { useState, useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Container } from './Container/Container.styled';
import { Heading } from './Heading/Hading';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initalContacts
  );

  const addContact = (name, number) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      toast.warn(`${name} is already in contacts!`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = contactId =>
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );

  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const [search, setSearch] = useState('');
  const handleChange = evt => setSearch(evt.target.value);

  const newContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Heading title={'phonebook'}></Heading>
      <FormContact onSubmit={addContact} />
      <Heading title={'contacts'}></Heading>
      <Filter search={search} onChange={handleChange} />
      <ContactList contacts={newContacts} onDelete={deleteContact} />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  search: PropTypes.string,
};
