import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputSearch({
  value, icon, onChange, onClick,
}) {
  return (
    <Container>
      <input
        value={value}
        type="text"
        placeholder="Pesquise pelo nome da cidade"
        onChange={onChange}
      />

      <button
        type="button"
        className="SearchIconButton"
        onClick={onClick}
      >
        <img src={icon} alt="Search" />
      </button>

    </Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

InputSearch.defaultProps = {
  onChange: PropTypes.func,
};
