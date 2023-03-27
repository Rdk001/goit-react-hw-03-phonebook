import { Component } from 'react';
import { Span, DeleteItem } from './ContactList.styled';

class ContactsList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <Span>
                {name}: {number}
              </Span>
              <DeleteItem
                type="button"
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </DeleteItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactsList;
