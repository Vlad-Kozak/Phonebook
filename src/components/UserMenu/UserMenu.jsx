import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const handleClick = () => {
    dispatch(authOperations.logout());
  };

  return (
    <div className={s.userMenu}>
      Hello, {userName}
      <button className={s.signOut} type="button" onClick={handleClick}>
        Sign Out
      </button>
    </div>
  );
}
