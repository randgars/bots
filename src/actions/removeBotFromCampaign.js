import {
    REMOVE_BOT_FROM_CAMPAIGN_REQUEST,
    REMOVE_BOT_FROM_CAMPAIGN_SUCCESS,
    REMOVE_BOT_FROM_CAMPAIGN_FAIL
} from './const';
import axios from 'axios';
import setCampaignInfo from './setCampaignInfo';

function removeBotFromCampaignRequest(dispatch, botId, campaignId) {
    
  const url = '//192.168.1.237:8091/campaign/bot/remove';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const data = {
    "botId": botId, 
    "campaignId": campaignId
  };
  const axiosRequest = axios.post(url, data, config);
  dispatch({ type: REMOVE_BOT_FROM_CAMPAIGN_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function removeBotFromCampaignSuccess(dispatch, campaignId, response) {
    
  window.console.log(response);
  setCampaignInfo(dispatch, campaignId);
  return { type: REMOVE_BOT_FROM_CAMPAIGN_SUCCESS };
}
function removeBotFromCampaignFail(error) {
    
  window.console.log(error);
  return { type: REMOVE_BOT_FROM_CAMPAIGN_FAIL };
}

function removeBotFromCampaign(dispatch, botId, campaignId) {
  return removeBotFromCampaignRequest(dispatch, botId, campaignId)
  .then((response) => {
    dispatch(removeBotFromCampaignSuccess(dispatch, campaignId, response))
  })
  .catch((error) => {
    dispatch(removeBotFromCampaignFail(error))
  });
}

module.exports = removeBotFromCampaign;
