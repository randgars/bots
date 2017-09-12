import React from 'react';
import './signup.css';
import { Link } from 'react-router';
import {FlatButton} from 'material-ui';

const styles = {
  signUpBtn: {
    marginRight: 20,
    color: '#fff'
  }
};

class SignUp extends React.Component {

  render() {
    return (
      <div className="signup-component">
      <FlatButton label="Login" primary={true} style={styles.signUpBtn}>
        <Link className="link" to="/login"/>
      </FlatButton>
      <FlatButton label="Register" primary={true} style={styles.signUpBtn}>
        <Link className="link" to="/registration"/>
      </FlatButton>
      </div>
    );
  }
}

SignUp.displayName = 'SignUp';
SignUp.propTypes = {};
SignUp.defaultProps = {};

export default SignUp;
