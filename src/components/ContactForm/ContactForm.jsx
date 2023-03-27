import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, Form, Text, Input, Submit } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;
    // const { name, number } = this.state;

    this.props.onSubmit({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });

    name.value = '';
    number.value = '';
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit}>
          <label>
            <Text>Name</Text>
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <Text>Number</Text>
            <Input
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Submit type="submit">Add contact</Submit>
        </Form>
      </FormContainer>
    );
  }
}

export default ContactForm;
