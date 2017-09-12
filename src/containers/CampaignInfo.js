import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setCampaignInfo,
  removeBotFromCampaign,
  addBotsToCampaign
} from '../actions/';
import Main from '../components/App/CampaignInfo/CampaignInfo';

class CampaignInfo extends Component {
  constructor(props) {
    super(props);
    this.getCampaignInfo = this.getCampaignInfo.bind(this);
    
  }
  getCampaignInfo() {
    this.props.actions.setCampaignInfo(this.props.params.id);
  }
  componentWillMount() {
    this.getCampaignInfo();
  }
  componentWillUpdate() {
    
  }
  render() {
    return (
      this.props.campaignInfo && <Main {...this.props} />
    );
  }
}

CampaignInfo.propTypes = {
  actions: PropTypes.shape({
    setCampaignInfo: PropTypes.func.isRequired,
    removeBotFromCampaign: PropTypes.func.isRequired,
    addBotsToCampaign: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    campaignInfo: state.campaign.campaignInfo
  };
  
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    removeBotFromCampaign: removeBotFromCampaign.bind(this, dispatch),
    setCampaignInfo: setCampaignInfo.bind(this, dispatch),
    addBotsToCampaign: addBotsToCampaign.bind(this, dispatch)
  }
  
  actionMap.actions = {...actionMap.actions, ...actionFn}

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignInfo);
