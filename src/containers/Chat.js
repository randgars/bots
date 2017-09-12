import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  greetingMessage
} from '../actions/';
import Main from '../components/Chat/Chat';

class Chat extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

Chat.propTypes = {
  actions: PropTypes.shape({
    greetingMessage: PropTypes.func.isRequired,
  })
};

function mapStateToProps(state) {
  const props = {
    greetingMessage: state.chat.greetingMessage
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    greetingMessage
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
