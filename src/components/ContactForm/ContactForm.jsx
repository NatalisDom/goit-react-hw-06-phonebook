import { useState } from 'react';
import css from './ContactForm.module.css';

function Form({ onSubmit }) {
  //   state = {
  //     name: '',
  //     number: '',
  //   };

  //   nameChange = e => {
  //     this.setState({ name: e.currentTarget.value });
  //   };

  //   numberChange = e => {
  //     this.setState({ number: e.currentTarget.value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     this.props.onSubmit(this.state);
  //     this.reset();
  //   };

  //   reset = () => {
  //     this.setState({ name: '', number: '' });
  //   };

  const [dataForm, setDataForm] = useState({
    name: '',
    number: '',
  });

  const nameChange = event => {
    const { name, value } = event.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(dataForm);

    reset();
  };

  const reset = () => {
    setDataForm({
      name: '',
      number: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name <br />
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={dataForm.name}
          onChange={nameChange}
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={dataForm.number}
          onChange={nameChange}
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;