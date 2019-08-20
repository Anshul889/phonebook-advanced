import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../history';

class ContactForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="on" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="name" component={this.renderInput} label="Name"/>
        <Field
          name="phonenumber"
          component={this.renderInput}
          label="Phone Number"
          />
        <Field
          name="Address"
          component={this.renderInput}
          label="Address"
          />
        <button className="ui button primary">Submit</button>
        <button onClick={() => history.push('/')} className="ui button negative">Cancel</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name){
    errors.name = 'You must enter a Name';
  }

  if (!formValues.phonenumber) {
    errors.phonenumber = 'You must enter a Phone Number'
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(ContactForm);
