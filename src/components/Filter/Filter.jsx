import PropTypes from 'prop-types';
import {FilerWrap, FieldCaption, ContactInput} from "./Filter.styled"

export const Filter = ({ search, onChange }) => {
  return (
    <FilerWrap>
      <FieldCaption htmlFor="search">
        Find contact by name
        <ContactInput 
        type="text" 
        name="search" 
        value={search} 
        onChange={onChange} />
      </FieldCaption>
    </FilerWrap>
  );
};

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
