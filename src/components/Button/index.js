/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';
import StyledButton from './styles';

export default function Button({
  type,
  disabled,
  isLoading,
  children,
  isDanger,
  ...rest
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      isDanger={isDanger}
      {...rest}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isDanger: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  isDanger: false,
};
