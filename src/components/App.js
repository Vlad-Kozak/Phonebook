import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
}

export { App };
