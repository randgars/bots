import React from 'react';
import './registration.css';
import { Field, reduxForm } from 'redux-form';
import validate from 'material-redux-form/validate';
import customTextField from 'material-redux-form/customTextField';
import { RaisedButton, Checkbox } from 'material-ui';

class Registration extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showPassword = this.showPassword.bind(this);
    this.register = this.register.bind(this);
    this.state = {
      showPass: 'password'
    }
  }
  showPassword(e){
    if (e.target.checked) {
      this.setState({
        ...this.state,
        showPass: 'text'
      })
    } else {
      this.setState({
        ...this.state,
        showPass: 'password'
      })
    }
  }
  register(event) {
    const email = event.email;
    const password = event.regPassword;
    const confirmPassword = event.confirmPassword;
    
    const redirectUrl = window.location.protocol + '//' + window.location.host + '/verify';
    this.props.actions.registration(email, password, confirmPassword, redirectUrl);
  }
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    
    return (
      <div className="signin-component">
        <form className="signin-form" onSubmit={handleSubmit(props => this.register(props))}>
          <p className="signin-title">Register new account</p>
          {this.props.errorMessage &&
            this.props.errorMessage.map((error, index) => {
              return (
                <p key={index} className="signin-text-error">{error}</p>
              )
            })
          }
          <Field
            name="email"
            component={customTextField}
            floatingLabelText="Email"
            fullWidth={true}
          />
          <Field
            name="regPassword"
            component={customTextField}
            type={this.state.showPass}
            floatingLabelText="Password"
            fullWidth={true}
          />
          <Field
            name="confirmPassword"
            component={customTextField}
            type={this.state.showPass}
            floatingLabelText="Confirm password"
            fullWidth={true}
          />
          <Checkbox
            label="Show password"
            className="signin-show-password"
            onCheck={this.showPassword}
          />
          <RaisedButton
            label="Register"
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

Registration.displayName = 'Registration';
Registration.propTypes = {};
Registration.defaultProps = {};

export default reduxForm({
  form: 'registrationForm',
  validate
})(Registration);