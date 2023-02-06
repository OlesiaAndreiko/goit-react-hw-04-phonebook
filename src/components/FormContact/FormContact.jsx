import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Form,
  BtnContact,
  FieldCaption,
  ContactInput,
} from './FormContact.styled';

export class FormContact extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { name, number } = this.state;

    onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form autoComplete="off" onSubmit={this.handleSubmit}>
        <FieldCaption htmlFor="name">
          Name
          <ContactInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder='Only letters, apostrophe, dash and spaces.'
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FieldCaption>
        <FieldCaption htmlFor="number">
          Number
          <ContactInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder='Only digits.Can spaces, dashes, parentheses, start with +.'
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FieldCaption>
        <BtnContact type="Submit">Add Contact</BtnContact>
      </Form>
    );
  }
}
