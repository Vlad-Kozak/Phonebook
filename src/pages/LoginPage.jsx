import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import authOperations from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import AuthForm from 'components/AuthForm/AuthForm';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(authOperations.login(data));
  };

  return (
    <Container>
      <h1 className="primary-title">Login</h1>

      <AuthForm title="Sign In" handleSubmit={handleSubmit} />

      <Link className="auth-link" to="/register">
        Don't have an account? Sign Up
      </Link>
    </Container>
  );
}
