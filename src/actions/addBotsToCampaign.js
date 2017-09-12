import {
  ADD_BOTS_TO_CAMAPIGN_REQUEST,
  ADD_BOTS_TO_CAMAPIGN_SUCCESS,
  ADD_BOTS_TO_CAMAPIGN_FAIL
} from './const';
import axios from 'axios';
import setCampaignInfo from './setCampaignInfo';

function addBotsToCampaignRequest(dispatch, botsList, campaignId) {
  const url = '//192.168.1.237:8091/campaign/bot/add';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const data = {
    "botIds": botsList, 
    "campaignId": campaignId
  };
  const axiosRequest = axios.post(url, data, config);
  dispatch({ type: ADD_BOTS_TO_CAMAPIGN_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function addBotsToCampaignSuccess(dispatch, campaignId, response) {
  window.console.log(response);
  setCampaignInfo(dispatch, campaignId);
  return { type: ADD_BOTS_TO_CAMAPIGN_SUCCESS };
}
function addBotsToCampaignFail(dispatch, error) {
  window.console.log(error);
  return { type: ADD_BOTS_TO_CAMAPIGN_FAIL };
}

function addBotsToCampaign(dispatch, botsList, campaignId) {
  return addBotsToCampaignRequest(dispatch, botsList, campaignId)
  .then((response) => {
    dispatch(addBotsToCampaignSuccess(dispatch, campaignId, response))
  })
  .catch((error) => {
    dispatch(addBotsToCampaignFail(dispatch, error))
  });
}

module.exports = addBotsToCampaign;
