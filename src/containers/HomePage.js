import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import Main from '../components/App/Home/Home';

class HomePage extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

HomePage.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
