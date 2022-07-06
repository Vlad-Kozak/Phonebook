import { useState, useEffect } from 'react';

import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = data => {
    if (checkName(data)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    setContacts([data, ...contacts]);
  };

  const onChange = e => {
    setFilter(e.currentTarget.value);
  };

  const onFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const checkName = data => {
    return contacts.some(el => el.name === data.name);
  };

  const onContactDelete = e => {
    setContacts(contacts.filter(el => el.id !== e.target.id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form submit={onFormSubmit} />
      <Section title="Contacts">
        <Filter filter={filter} change={onChange} />
        <Contacts contacts={onFilter()} onContactDelete={onContactDelete} />
      </Section>
    </>
  );
}

export { App };
