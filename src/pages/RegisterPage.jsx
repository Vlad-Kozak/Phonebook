import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import AuthForm from 'components/AuthForm/AuthForm';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleSubmit = data => {
    dispatch(authOperations.register(data));
  };

  return (
    <>
      {isLoggedIn && <Navigate replace to="/" />}

      <Container>
        <h1 className="primary-title">Sign up</h1>

        <AuthForm type="register" title="Sign Up" handleSubmit={handleSubmit} />

        <Link className="auth-link" to="/login">
          Already have an account? Sign in
        </Link>
      </Container>
    </>
  );
}
