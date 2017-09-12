import {
  SET_CAMPAIGNS_REQUEST,
  SET_CAMPAIGNS_SUCCESS,
  SET_CAMPAIGNS_FAIL
} from './const';
import axios from 'axios';

function setCampaignsRequest(dispatch) {
  const url = '//192.168.1.237:8091/campaign/all';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const axiosRequest = axios.get(url, config);
  dispatch({ type: SET_CAMPAIGNS_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function setCampaignsSuccess(response) {
  window.console.log(response);
  const campaignlist = response.data.items;
  return { type: SET_CAMPAIGNS_SUCCESS, campaignlist };
}
function setCampaignsFail(error) {
  window.console.log(error);
  return { type: SET_CAMPAIGNS_FAIL };
}

function setCampaigns(dispatch) {
  return setCampaignsRequest(dispatch)
  .then((response) => {
    dispatch(setCampaignsSuccess(response))
  })
  .catch((err) => {
    dispatch(setCampaignsFail(err))
  });
}

module.exports = setCampaigns;
