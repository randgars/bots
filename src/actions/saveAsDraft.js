import {
  SAVE_AS_DRAFT_REQUEST,
  SAVE_AS_DRAFT_SUCCESS,
  SAVE_AS_DRAFT_FAIL
} from './const';
import axios from 'axios';
import setBots from './setBots';
import setCampaigns from './setCampaigns';

function saveAsDraftRequest(dispatch, currentId, checked) {
  const url = `//192.168.1.237:8091/${checked}/${currentId}/draft`;
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const data = {};
  const axiosRequest = axios.put(url, data, config);
  dispatch({ type: SAVE_AS_DRAFT_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function saveAsDraftSuccess(dispatch, checked, response) {
  debugger
  window.console.log(response);
  switch (checked) {
    case 'bot':
      setBots(dispatch);
      break;
    case 'campaign':
      setCampaigns(dispatch);
      break;
    default:
      break;
  }
  return { type: SAVE_AS_DRAFT_SUCCESS };
}
function saveAsDraftFail(error) {
  window.console.log(error);
  return { type: SAVE_AS_DRAFT_FAIL };
}

function saveAsDraft(dispatch, currentId, checked) {
  return saveAsDraftRequest(dispatch, currentId, checked)
  .then((response) => {
    dispatch(saveAsDraftSuccess(dispatch, checked, response))
  })
  .catch((err) => {
    dispatch(saveAsDraftFail(err))
  });
}

module.exports = saveAsDraft;
