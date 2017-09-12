/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  allMessages,
  logout
} from '../actions/';
import Main from '../components/App/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    allMessages: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  })
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    allMessages: state.chat.allMessages,
    logged: state.userLogIn.logged
  };
  
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    allMessages
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    logout: logout.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn}

  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
