import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/phoneBookAPI';
import s from './Contacts.module.css';

const Contacts = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.filter);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <ul className={s.list}>
      {data
        .filter(el => el.name.toLowerCase().includes(filter))
        .map(({ id, number, name }) => (
          <li className={s.item} key={id}>
            {name}: {number}
            <button
              className={s.deleteBtn}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Contacts;
