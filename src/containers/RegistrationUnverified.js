import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  resendActivationLink
} from '../actions/';
import Main from '../components/App/RegistrationUnverified/RegistrationUnverified';

class RegistrationUnverified extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

RegistrationUnverified.propTypes = {
  actions: PropTypes.shape({
    resendActivationLink: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    errorActivateMessage: state.userLogIn.errorMessage,
    errorEmailMessage: state.userRegistration.errorMessage
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    resendActivationLink: resendActivationLink.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn} 

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationUnverified);
