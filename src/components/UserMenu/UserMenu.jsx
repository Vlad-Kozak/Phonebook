import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import s from './UserMenu.module.css';
import { ReactComponent as Logo } from 'images/logout.svg';

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
        <Logo className={s.icon} />
      </button>
    </div>
  );
}
