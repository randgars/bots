import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  saveCampaign
} from '../actions/';
import Main from '../components/App/Campaign/Campaign';

class CampaignAdd extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

CampaignAdd.propTypes = {
  actions: PropTypes.shape({
    saveCampaign: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };

  const actionFn = {
    saveCampaign: saveCampaign.bind(this, dispatch)
  }

  actionMap.actions = {...actionMap.actions, ...actionFn}

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignAdd);
