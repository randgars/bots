import { SAVE_CAMPAIGN_REQUEST, SAVE_CAMPAIGN_SUCCESS, SAVE_CAMPAIGN_FAIL, ROUTING } from './const';
import axios from 'axios';

function saveCampaignRequest(dispatch, data) {
  const url = '//192.168.1.237:8091/campaign/add';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const axiosRequest = axios.post(url, data, config);
  dispatch({ type: SAVE_CAMPAIGN_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function saveCampaignSuccess(dispatch, response) {
  window.console.log(response);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/main' }});
  return { type: SAVE_CAMPAIGN_SUCCESS };
}
function saveCampaignFail(error) {
  window.console.log(error);
  return { type: SAVE_CAMPAIGN_FAIL };
}

function saveCampaign(dispatch, data) {
  return saveCampaignRequest(dispatch, data)
  .then((response) => {
    dispatch(saveCampaignSuccess(dispatch, response))
  })
  .catch((err) => {
    dispatch(saveCampaignFail(err))
  });
}

module.exports = saveCampaign;
