import React from 'react';
import './login.css';
import { RaisedButton, Checkbox } from 'material-ui';
import { Field, reduxForm } from 'redux-form';
import validate from 'material-redux-form/validate';
import customTextField from 'material-redux-form/customTextField';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.showPassword = this.showPassword.bind(this);
    this.logIn = this.logIn.bind(this);
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
  logIn(event) {
    const username = event.email;
    const password = event.password;
    this.props.actions.login(username, password);
  }
  render() {
    const { error, handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="signin-component">
        <form className="signin-form" onSubmit={handleSubmit(props => this.logIn(props))}>
          <p className="signin-title">Log in width your email account</p>
          {this.props.errorMessage && <p className="signin-text-error">{this.props.errorMessage}</p>}
          <Field
            name="email"
            component={customTextField}
            floatingLabelText="Email"
            fullWidth={true}
          />
          <Field
            name="password"
            component={customTextField}
            type={this.state.showPass}
            floatingLabelText="Password"
            fullWidth={true}
          />
          <Checkbox
            label="Show password"
            className="signin-show-password"
            onCheck={this.showPassword}
          />
          <RaisedButton
            label="Log in"
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

Login.displayName = 'Login';
Login.propTypes = {};
Login.defaultProps = {};

export default reduxForm({
  form: 'loginForm',
  validate
})(Login);