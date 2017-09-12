import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setBotInfo,
  publishBot
} from '../actions/';
import Main from '../components/App/BotInfo/BotInfo';
import axios from 'axios';

class BotInfo extends Component {
  constructor(props) {
    super(props);
    this.getBotInfo = this.getBotInfo.bind(this);
    this.getBotInfoSuccess = this.getBotInfoSuccess.bind(this);
    this.getBotInfoCatch = this.getBotInfoCatch.bind(this);
    this.state = {
      id: this.props.params.id
    }
    
  }
  getBotInfoSuccess(response) {
    this.props.actions.setBotInfo(response.data);
  }
  getBotInfoCatch(error){
    this.setState({...this.state, error });
  }
  getBotInfo() {
    const config = { headers: { 'X-Auth-Token': window.localStorage.getItem('X-Auth-Token') } };
    axios.get('//192.168.1.237:8091/bot/' + this.state.id + '/info', config)
    .then(this.getBotInfoSuccess, this.getBotInfoCatch);
  }
  componentWillMount() {
    this.getBotInfo();
  }
  render() {
    return <Main {...this.props} />;
  }
}

BotInfo.propTypes = {
  actions: PropTypes.shape({
    setBotInfo: PropTypes.func.isRequired,
    publishBot: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    botInfo: state.bot.botInfo
  };
  
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    setBotInfo
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    publishBot: publishBot.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn}

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(BotInfo);
