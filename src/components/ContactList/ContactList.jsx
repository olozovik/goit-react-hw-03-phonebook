import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.map(({ name, number }) => {
        return (
          <li key={name}>
            {name}: {number}
            <button type={'button'} data-name={name} onClick={deleteContact}>
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
  deleteContact: PropTypes.func,
};
