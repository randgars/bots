import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  login
} from '../actions/';
import Main from '../components/App/Login/Login';

class Login extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

Login.propTypes = {
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    errorMessage: state.userLogIn.errorMessage
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    login: login.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn} 

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
