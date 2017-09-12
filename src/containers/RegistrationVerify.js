import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  postActivateToken
} from '../actions/';
import Main from '../components/App/RegistrationVerify/RegistrationVerify';

class RegistrationVerify extends Component {
  constructor(props) {
    super(props);
    this.postToken = this.postToken.bind(this);
  }
  postToken() {
    const data = {
      token: this.props.location.query.token
    }
    this.props.actions.postActivateToken(data);
  }
  componentWillMount() {
    this.postToken();
  }
  render() {
    return <Main {...this.props} />;
  }
}

RegistrationVerify.propTypes = {
  actions: PropTypes.shape({
    postActivateToken: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    postActivateToken: postActivateToken.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn} 

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationVerify);
