import { Component } from 'react';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    if (this.checkName(data)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [data, ...this.state.contacts],
    });
  };

  onChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onFilter = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  checkName = data => {
    return this.state.contacts.some(el => el.name === data.name);
  };

  onContactDelete = e => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== e.target.id),
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form submit={this.onFormSubmit} />
        <Section title="Contacts">
          <Filter filter={this.state.filter} change={this.onChange} />
          <Contacts
            contacts={this.onFilter()}
            onContactDelete={this.onContactDelete}
          />
        </Section>
      </>
    );
  }
}

export { App };
