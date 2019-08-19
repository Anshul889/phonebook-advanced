import React from 'react';
import { connect } from 'react-redux';
import { createContact } from '../actions';
import ContactForm from './ContactForm';

class ContactCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createContact(formValues);
  };

  render() {
    return (
      <div style={{ width: '80%', margin: '0 auto', paddingTop: '10px'}}>
        <h3>Create a Contact</h3>
        <ContactForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createContact })(ContactCreate);
