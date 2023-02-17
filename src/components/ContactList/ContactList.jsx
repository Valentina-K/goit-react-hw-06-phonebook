import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/Contact/Contact';
import { deleteContact } from 'redux/contactSlice';
import { List } from './ContactList.styled';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number}>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </Contact>
      ))}
    </List>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
