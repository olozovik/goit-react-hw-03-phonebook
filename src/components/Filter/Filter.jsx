import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ inputValue, onChange }) {
  const inputId = uuidv4();
  return (
    <Label htmlFor="inputId">
      Find contacts by name
      <input id={inputId} type="text" value={inputValue} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

export { Filter };
