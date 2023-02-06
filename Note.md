import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactList } from '../components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    // console.log(e.target.elements);
    // const {name, number} = e.target.elements;
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts : prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number } = this.state;
    return (
      <div
        style={{
          padding: '20px',
          fontSize: 20,
        }}
      >
        <h1>Phonebook</h1>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="Submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="filetr">
          Find contact by name
          <input type="text" name="filter" />
        </label>        
        <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <span>{name}</span>
              <span>{number}</span>
              <button type="button" name={id} onClick={this.handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
refactorind, delete from App
 // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   const { name, number } = this.state;
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { id: nanoid(), name, number }],
  //   }));
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };
 {/* <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              // required
            />
          </label>
          <button type="Submit">Add Contact</button>
        </form> */}