import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Wrapper } from 'components/Wrapper/Wrapper';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts];
      newContacts.push(newContact);
      return {
        contacts: newContacts,
      };
    });
  };

  deleteContact = e => {
    const newContactsList = this.state.contacts.filter(contact => {
      return contact.name !== e.target.dataset.name;
    });
    this.setState({ contacts: newContactsList });
  };

  findContact = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, findContact, deleteContact } = this;

    const contactsToRender = !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        );

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filterValue={filter} findContact={findContact} />
        <ContactList
          contacts={contactsToRender}
          filterValue={filter}
          deleteContact={deleteContact}
        />
        {filter && contactsToRender.length === 0 && (
          <p>There are no contacts with this name.</p>
        )}
        {!filter && contactsToRender.length === 0 && (
          <p>There are no contacts here.</p>
        )}
      </Wrapper>
    );
  }
}

export { App };
