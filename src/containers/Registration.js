import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  registration
} from '../actions/';
import Main from '../components/App/Registration/Registration';

class Registration extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

Registration.propTypes = {
  actions: PropTypes.shape({
    registration: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    errorMessage: state.userRegistration.errorMessage
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    registration: registration.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn} 

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
