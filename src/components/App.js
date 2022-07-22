import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import authOperations from 'redux/auth/authOperations';
import { getIsLoadingRefresh } from 'redux/auth/authSelectors';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const isLoadingRefresh = useSelector(getIsLoadingRefresh);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={4000} />

      {!isLoadingRefresh && (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Routes>
      )}
    </>
  );
}

export { App };
