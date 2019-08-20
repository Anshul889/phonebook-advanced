import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchContact, editContact } from '../actions';
import ContactForm from './ContactForm';

class ContactEdit extends React.Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editContact(this.props.match.params.id, formValues);
  }

  render() {
    if (!this.props.number) {
      return <div>Loading...</div>
    }
    return(
      <div style={{'width' : '90%', margin: "0 auto", paddingTop: '15px'}}>
        <h3>Edit a Contact</h3>
        <ContactForm
          initialValues={_.pick(this.props.number, 'name', 'phonenumber')}
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return { number : state.numbers[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchContact, editContact })(ContactEdit);
