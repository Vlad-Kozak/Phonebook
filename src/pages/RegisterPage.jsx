import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import Container from 'components/Container/Container';
import AuthForm from 'components/AuthForm/AuthForm';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(authOperations.register(data));
  };

  return (
    <Container>
      <h1 className="primary-title auth">Sign up</h1>

      <AuthForm type="register" title="Sign Up" handleSubmit={handleSubmit} />

      <Link className="auth-link" to="/login">
        Already have an account? Sign in
      </Link>
    </Container>
  );
}
