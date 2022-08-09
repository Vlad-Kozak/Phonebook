import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'redux/phoneBookAPI';
import { toast } from 'react-toastify';
import s from './ContactsForm.module.css';

function ContactsForm() {
  const [addContact] = useAddContactMutation();
  const { data = [] } = useGetContactsQuery();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (data.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      toast(`${name} is already in contacts.`);
      return;
    }

    addContact({ name, number });
    formReset();
  };

  const onChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label className={s.label}>
        Name*
        <input
          autoComplete="off"
          className={s.input}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Number*
        <input
          autoComplete="off"
          className={s.input}
          value={number}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.submit} type="submit">
        &#10010; Add contact
      </button>
    </form>
  );
}

export default ContactsForm;
