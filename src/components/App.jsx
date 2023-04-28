import { Component } from "react";
import { ContactForm } from "./contactForm/ContactForm.jsx";
import { ContactList } from "./contactList/ContactList.jsx";
import { Layout } from "./layout/Layout.jsx";
import { Filter } from "./filter/Filter.jsx";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = id => {
    this.setState(prevState => ( {
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  if (condition) {
    
  }
  addContact = newContact => {
      const chekContact = this.state.contacts.find(
      contact => contact.name === newContact.name || contact.number === newContact.number
      );

      if (chekContact) {
        alert('This name is already in contacts');
      return;
      }
      this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
        };
        
    });
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter}
          onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts}
          onDeleteContact={this.deleteContact} />
      </Layout>  
        )     
  }
}