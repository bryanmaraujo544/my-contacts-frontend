import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export const Spinner = ({ size = 32, color = 'blue' }) => (
  <Container size={size} color={color} />
);

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  size: 32,
  color: 'blue',
};
