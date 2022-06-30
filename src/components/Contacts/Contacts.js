import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, onContactDelete }) => (
  <>
    <ul className={s.list}>
      {contacts.map(el => (
        <li className={s.item} key={el.id}>
          {el.name}: {el.number}
          <button
            id={el.id}
            className={s.deleteBtn}
            type="button"
            onClick={onContactDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};

export default Contacts;
