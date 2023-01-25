import PropTypes from 'prop-types';
import { StyledButton } from './styles';

export default function Button({ type, value, onClick }) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
    >{value}
    </StyledButton>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
