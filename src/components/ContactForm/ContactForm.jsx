import { useState } from 'react';
import { customAlphabet } from 'nanoid';
//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Form from './ContactForm.styled';
import { addContact } from '../../redux/contactSlice';

const nanoid = customAlphabet('1234567890id-', 5);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameInput = nanoid();
  const numberInput = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    //onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameInput}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id={nameInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={numberInput}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInput}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add contact</button>
    </Form>
  );
};

/* ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; */

export default ContactForm;