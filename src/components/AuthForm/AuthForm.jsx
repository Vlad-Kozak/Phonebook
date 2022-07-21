import { useState } from 'react';
import s from './AuthForm.module.css';

export default function AuthForm({ type = 'login', title, handleSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (type === 'login') {
      handleSubmit({ email, password });
    } else if (type === 'register') {
      handleSubmit({ name, email, password });
    }

    formReset();
  };

  const onChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'email':
        setEmail(e.currentTarget.value);
        break;

      case 'password':
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {type === 'register' && (
        <label className={s.label}>
          Name*
          <input
            autoComplete="off"
            className={s.input}
            type="text"
            value={name}
            name="name"
            required
            onChange={onChange}
          />
        </label>
      )}
      <label className={s.label}>
        Email*
        <input
          autoComplete="off"
          className={s.input}
          type="email"
          value={email}
          name="email"
          required
          onChange={onChange}
        />
      </label>
      <label className={s.label}>
        Password*
        <input
          autoComplete="off"
          className={s.input}
          value={password}
          onChange={onChange}
          type="password"
          name="password"
          required
        />
      </label>
      <button className={s.submit} type="submit">
        {title}
      </button>
    </form>
  );
}
