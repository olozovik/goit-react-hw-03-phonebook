import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

function ContactList({ contacts, onClick }) {
  return (
    <List>
      {contacts.map(({ name, number }) => {
        return (
          <li key={name}>
            {name}: {number}
            <button type={'button'} data-name={name} onClick={onClick}>
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
}

export { ContactList };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func,
};
