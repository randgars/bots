import {
  SET_CAMPAIGN_INFO_REQUEST,
  SET_CAMPAIGN_INFO_SUCCESS,
  SET_CAMPAIGN_INFO_FAIL
} from './const';
import axios from 'axios';

function setCampaignInfoRequest(dispatch, campaignId) {
  const url = '//192.168.1.237:8091/campaign/' + campaignId + '/info';
  const config = { headers: { 'X-Auth-Token': window.localStorage.getItem('X-Auth-Token') } };
  const axiosRequest = axios.get(url, config);
  dispatch({ type: SET_CAMPAIGN_INFO_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function setCampaignInfoSuccess(response) {
  window.console.log(response);
  const campaign = response.data;
  return { type: SET_CAMPAIGN_INFO_SUCCESS, campaign };
}
function setCampaignInfoFail(error) {
  window.console.log(error);
  return { type: SET_CAMPAIGN_INFO_FAIL };
}

function setCampaignInfo(dispatch, campaignId) {
  return setCampaignInfoRequest(dispatch, campaignId)
  .then((response) => {
    dispatch(setCampaignInfoSuccess(response))
  })
  .catch((error) => {
    dispatch(setCampaignInfoFail(error))
  });
}

module.exports = setCampaignInfo;
