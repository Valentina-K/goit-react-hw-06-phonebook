import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Container } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <Provider template={AlertTemplate} {...options}>
        <ContactForm />
      </Provider>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
