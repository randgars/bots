import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  setBots,
  searchBots,
  allBotfilter,
  approvedfilter,
  pendingYourApprovalfilter,
  pendingAdminApprovalfilter,
  draftsfilter,
  rejectedfilter,
  setCampaigns,
  searchCampaigns,
  allCampaignFilter,
  approvedCampaignFilter,
  rejectedCampaignFilter,
  draftsCampaignFilter,
  pendingAdminApprovalCampaignFilter,
  pendingYourApprovalCampaignFilter,
  saveAsDraft,
  restore
} from '../actions/';
import Main from '../components/App/Main/Main';
import axios from 'axios';


class MainPage extends Component {
  constructor(props) {
    super(props);
    this.getBotList = this.getBotList.bind(this);

    this.getCampaignList = this.getCampaignList.bind(this);

    this.setTabHeaderBot = this.setTabHeaderBot.bind(this);
    this.setTabHeaderBotSuccess = this.setTabHeaderBotSuccess.bind(this);
    this.setTabHeaderBotCatch = this.setTabHeaderBotCatch.bind(this);

    this.setTabHeaderCampaign = this.setTabHeaderCampaign.bind(this);
    this.setTabHeaderCampaignSuccess = this.setTabHeaderCampaignSuccess.bind(this);
    this.setTabHeaderCampaignCatch = this.setTabHeaderCampaignCatch.bind(this);

    this.setOfferInfo = this.setOfferInfo.bind(this);
    this.setOfferInfoSuccess = this.setOfferInfoSuccess.bind(this);
    this.setOfferInfoCatch = this.setOfferInfoCatch.bind(this);

    this.state = {
      tabHeaderBot: null,
      tabHeaderCampaign: null,
      offerInfo: null
    }
  }
  getBotList() {
    this.props.actions.setBots();
  }
  getCampaignList() {
    this.props.actions.setCampaigns();
  }
  setTabHeaderBotSuccess(response) {
    this.state.tabHeaderBot = response.data;
  }
  setTabHeaderBotCatch(error){
    this.setState({ ...this.state, error });
  }
  setTabHeaderBot() {
    axios.get('../mock/tabHeaderBot.json').then(this.setTabHeaderBotSuccess, this.setTabHeaderBotCatch);
  }
  setTabHeaderCampaignSuccess(response) {
    this.state.tabHeaderCampaign = response.data;
  }
  setTabHeaderCampaignCatch(error){
    this.setState({ ...this.state, error });
  }
  setTabHeaderCampaign() {
    axios.get('../mock/tabHeaderCampaign.json').then(this.setTabHeaderCampaignSuccess, this.setTabHeaderCampaignCatch);
  }
  setOfferInfoSuccess(response) {
    this.state.offerInfo = response.data;
  }
  setOfferInfoCatch(error){
    this.setState({ ...this.state, error });
  }
  setOfferInfo() {
    axios.get('../mock/subscriptionsOffers.json').then(this.setOfferInfoSuccess, this.setOfferInfoCatch);
  }
  componentDidMount() {
    this.setOfferInfo();
    this.setTabHeaderBot();
    this.setTabHeaderCampaign();
    this.getBotList();
    this.getCampaignList();
  }

  render() {
    return (
      <Main
        offerInfo={this.state.offerInfo}
        tabHeaderBot={this.state.tabHeaderBot}
        tabHeaderCampaign={this.state.tabHeaderCampaign}
        {...this.props}
      />
    )
  }
}

MainPage.propTypes = {
  actions: PropTypes.shape({
    setBots: PropTypes.func.isRequired,
    searchBots: PropTypes.func.isRequired,
    allBotfilter: PropTypes.func.isRequired,
    approvedfilter: PropTypes.func.isRequired,
    pendingYourApprovalfilter: PropTypes.func.isRequired,
    pendingAdminApprovalfilter: PropTypes.func.isRequired,
    draftsfilter: PropTypes.func.isRequired,
    rejectedfilter: PropTypes.func.isRequired,
    setCampaigns: PropTypes.func.isRequired,
    searchCampaigns: PropTypes.func.isRequired,
    allCampaignFilter: PropTypes.func.isRequired,
    approvedCampaignFilter: PropTypes.func.isRequired,
    rejectedCampaignFilter: PropTypes.func.isRequired,
    draftsCampaignFilter: PropTypes.func.isRequired,
    pendingAdminApprovalCampaignFilter: PropTypes.func.isRequired,
    pendingYourApprovalCampaignFilter: PropTypes.func.isRequired,
    saveAsDraft: PropTypes.func.isRequired,
    restore: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    botList: state.botList.filter,
    campaignList: state.campaignList.filter
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    searchBots,
    allBotfilter,
    approvedfilter,
    pendingYourApprovalfilter,
    pendingAdminApprovalfilter,
    draftsfilter,
    rejectedfilter,
    searchCampaigns,
    allCampaignFilter,
    approvedCampaignFilter,
    rejectedCampaignFilter,
    draftsCampaignFilter,
    pendingAdminApprovalCampaignFilter,
    pendingYourApprovalCampaignFilter
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  const actionFn = {
    saveAsDraft: saveAsDraft.bind(this, dispatch),
    restore: restore.bind(this, dispatch),
    setBots: setBots.bind(this, dispatch),
    setCampaigns: setCampaigns.bind(this, dispatch)
  }

  actionMap.actions = {...actionMap.actions, ...actionFn} 

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
