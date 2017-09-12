import React from 'react';
import './registrationverify.css';

class RegistrationVerify extends React.Component {

  render() {
    return (
      <div className="registration-verify-component">
        <p className="registration-verify-component__info-text">Wait...</p>
      </div>
    );
  }
}

RegistrationVerify.displayName = 'RegistrationVerify';
RegistrationVerify.propTypes = {};
RegistrationVerify.defaultProps = {};

export default RegistrationVerify;
