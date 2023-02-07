// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import initalContacts from '../components/contacts.json';
import { useState, useEffect } from 'react';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Container } from './Container/Container.styled';
import { Heading } from './Heading/Hading';


const getInitalContactsState = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  } else {
    return initalContacts;
  }
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitalContactsState);
  const [search, setSearch] = useState('');

  const addContact = (name, number) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      alert(`${name} is already in contacts!`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setSearch({ [name]: value });
  };

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
    </Container>
  );
};

// App.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.number.isRequired,
//     })
//   ),
//   filter: PropTypes.string,
// };

// export class App extends Component {
//   static propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.number.isRequired,
//       })
//     ),
//     filter: PropTypes.string,
//   };

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts =
//       JSON.parse(localStorage.getItem('contacts')) || initalContacts;
//     this.setState({ contacts });
//   }

//   componentDidUpdate(_, prevState) {
//     if (
//       prevState.contacts.length &&
//       prevState.contacts.length !== this.state.length
//     ) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     if (
//       contacts.some(
//         contact =>
//           contact.name.toLowerCase().trim() === name.toLowerCase().trim()
//       )
//     ) {
//       alert(`${name} is already in contacts!`);
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { id: nanoid(), name, number }],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const newContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//     return (
//       <Container>
//         <Heading title={'phonebook'}></Heading>
//         <FormContact onSubmit={this.addContact} />
//         <Heading title={'contacts'}></Heading>
//         <Filter filter={filter} onChange={this.handleChange} />
//         <ContactList contacts={newContacts} onDelete={this.deleteContact} />
//       </Container>
//     );
//   }
// }


