import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phoneBook';
import s from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(state => state.phoneBook.items);
  const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, number, name }) => (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              className={s.deleteBtn}
              type="button"
              onClick={() => dispatch(deleteContact({ id }))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
