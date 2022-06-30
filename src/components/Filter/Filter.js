import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, change }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      name="filter"
      value={filter}
      onChange={change}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Filter;
