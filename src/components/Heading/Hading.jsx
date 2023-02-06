import PropTypes from 'prop-types';
import { Title } from './Heading.styled';

export const Heading = ({ title }) => {
  return <Title>{title}</Title>;
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};
