import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

function PublicRoute({ children, redirect = '/', restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = restricted && isLoggedIn;

  return shouldRedirect ? <Navigate to={redirect} replace /> : children;
}

export { PublicRoute };
