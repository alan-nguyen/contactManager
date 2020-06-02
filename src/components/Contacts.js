import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
  }

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter((contact) => contact.id !== id);

    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
