// import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = () => {
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name
        <input className={css.input}  />
      </label>
    </div>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   filter: PropTypes.func.isRequired,
// };
