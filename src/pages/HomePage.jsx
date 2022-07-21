import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';
import UserMenu from 'components/UserMenu/UserMenu';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      {isLoggedIn || <Navigate replace to="/login" />}

      <Container>
        <UserMenu />
        <h1 className="primary-title">Phonebook</h1>
        <ContactsForm />
        <Filter />
        <Contacts />
      </Container>
    </>
  );
}
