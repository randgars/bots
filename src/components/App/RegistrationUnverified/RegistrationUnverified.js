import React from 'react';
import './registrationunverified.css';
import { Field, reduxForm } from 'redux-form';
import { RaisedButton } from 'material-ui';
import validate from 'material-redux-form/validate';
import customTextField from 'material-redux-form/customTextField';

class RegistrationUnverified extends React.Component {
  constructor(props) {
    super(props);
    this.resendLink = this.resendLink.bind(this);
  }
  resendLink(formData) {
    const email = formData.email;
    const redirectUrl = window.location.protocol + '//' + window.location.host + '/verify';
    this.props.actions.resendActivationLink(email, redirectUrl);
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="registration-unverified-component">
        <p className="registration-unverified-component__error-message">{this.props.errorActivateMessage}</p>
        
        <h3 className="registration-unverified-component__title">Activation link was sent to your email. It's available for 24 hours.</h3>
        <h3 className="registration-unverified-component__title">Please, verify your email.</h3>
        <form className="registration-unverified-component__resend-link-form" onSubmit={handleSubmit(props => this.resendLink(props))}>
          <p className="registration-unverified-component__form-message">If you haven't got an email, click below to resend activation link</p>
          <p className="registration-unverified-component__error-message">{this.props.errorEmailMessage}</p>
          <Field
            name="email"
            component={customTextField}
            floatingLabelText="Email"
            fullWidth={true}
          />
          <RaisedButton
            label="Resend activation link"
            primary={true}
            fullWidth={true}
          >
            <input className="input-hidden" type="submit" disabled={pristine || submitting}/>
          </RaisedButton>
        </form>
      </div>
    );
  }
}

RegistrationUnverified.displayName = 'RegistrationUnverified';
RegistrationUnverified.propTypes = {};
RegistrationUnverified.defaultProps = {};


export default reduxForm({
  form: 'resendLink',
  validate
})(RegistrationUnverified);
