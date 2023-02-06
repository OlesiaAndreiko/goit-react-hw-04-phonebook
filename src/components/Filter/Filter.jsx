import PropTypes from 'prop-types';
import {FilerWrap, FieldCaption, ContactInput} from "./Filter.styled"

export const Filter = ({ filter, onChange }) => {
  return (
    <FilerWrap>
      <FieldCaption htmlFor="filter">
        Find contact by name
        <ContactInput 
        type="text" 
        name="filter" 
        value={filter} 
        onChange={onChange} />
      </FieldCaption>
    </FilerWrap>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
