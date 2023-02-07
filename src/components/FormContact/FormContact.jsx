import PropTypes from 'prop-types';

import {
  Form,
  BtnContact,
  FieldCaption,
  ContactInput,
} from './FormContact.styled';

export const FormContact = ({ onSubmit }) => {

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldCaption htmlFor="name">
        Name
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Only letters, apostrophe, dash and spaces."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FieldCaption>
      <FieldCaption htmlFor="number">
        Number
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          placeholder="Only digits.Can spaces, dashes, parentheses, start with +."
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FieldCaption>
      <BtnContact>Add Contact</BtnContact>
    </Form>
  );
};

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
