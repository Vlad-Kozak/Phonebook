import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import Container from 'components/Container/Container';
import AuthForm from 'components/AuthForm/AuthForm';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleSubmit = data => {
    dispatch(authOperations.login(data));
  };

  return (
    <>
      {isLoggedIn && <Navigate replace to="/" />}
      <Container>
        <h1 className="primary-title">Login</h1>

        <AuthForm title="Sign In" handleSubmit={handleSubmit} />

        <Link className="auth-link" to="/register">
          Don't have an account? Sign Up
        </Link>
      </Container>
    </>
  );
}
