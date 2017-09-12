import React from 'react';
import './registrationactivate.css';

class RegistrationActivate extends React.Component {

  render() {
    return (
      <div className="registration-activate-component">
        <p className="registration-activate-component__message">Check your email account in order to activate your account.</p>
      </div>
    );
  }
}

RegistrationActivate.displayName = 'RegistrationActivate';
RegistrationActivate.propTypes = {};
RegistrationActivate.defaultProps = {};

export default RegistrationActivate;
