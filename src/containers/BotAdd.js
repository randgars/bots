import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  saveBot,
  getBotAddData
} from '../actions/';
import Main from '../components/App/BotAdd/BotAdd';

class BotAdd extends Component {
  constructor(props) {
    super(props);
    this.getBotAddDataFn = this.getBotAddDataFn.bind(this);
  }
  getBotAddDataFn() {
    debugger
    this.props.actions.getBotAddData();
  }
  componentDidMount() {
    this.getBotAddDataFn();
  }
  render() {
    return <Main {...this.props} />;
  }
}

BotAdd.propTypes = {
  actions: PropTypes.shape({
    saveBot: PropTypes.func.isRequired,
    getBotAddData: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    scriptsList: state.form.botAdd,
    botAddData: state.addBot.botAddData
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };

  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    saveBot: saveBot.bind(this, dispatch),
    getBotAddData: getBotAddData.bind(this, dispatch)
  }

  actionMap.actions = {...actionMap.actions, ...actionFn}

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(BotAdd);
