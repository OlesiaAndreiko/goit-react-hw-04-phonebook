import PropTypes from 'prop-types';
import {ItemContact, BtnDelete} from "./Contact.styled"

export const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <ItemContact key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </ItemContact>
    </>
  );
};


Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
