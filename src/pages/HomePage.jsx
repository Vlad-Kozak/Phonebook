import ContactsForm from 'components/ContactsForm/ContactsForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';

export default function HomePage() {
  return (
    <Container>
      <UserMenu />
      <h1 className="primary-title">Phonebook</h1>
      <ContactsForm />
      <Filter />
      <Contacts />
    </Container>
  );
}
