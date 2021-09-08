import { v4 as uuidv4 } from 'uuid';
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

  handleOnSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isContactExisting = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isContactExisting) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleOnClickDelete = e => {
    const newContactsList = this.state.contacts.filter(contact => {
      return contact.name !== e.target.dataset.name;
    });
    this.setState({ contacts: newContactsList });
  };

  handleFilterInput = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleOnSubmit, handleFilterInput, handleOnClickDelete } = this;

    const contactsToRender = !filter
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        );

    const unsuccessfulFiltering = filter && contactsToRender.length === 0;
    const contactsListIsEmpty = !filter && contactsToRender.length === 0;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleOnSubmit} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter inputValue={filter} onChange={handleFilterInput} />
        <ContactList
          contacts={contactsToRender}
          onClick={handleOnClickDelete}
        />
        {unsuccessfulFiltering && <p>There are no contacts with this name.</p>}
        {contactsListIsEmpty && <p>There are no contacts here.</p>}
      </Wrapper>
    );
  }
}

export { App };
