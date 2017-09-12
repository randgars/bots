import {
  RESTORE_REQUEST,
  RESTORE_SUCCESS,
  RESTORE_FAIL
} from './const';
import axios from 'axios';
import setBots from './setBots';
import setCampaigns from './setCampaigns';

function restoreRequest(dispatch, currentId, checked) {
  const url = `//192.168.1.237:8091/${checked}/${currentId}/restore`;
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const data = {};
  const axiosRequest = axios.put(url, data, config);
  dispatch({ type: RESTORE_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function restoreSuccess(dispatch, checked, response) {
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
  return { type: RESTORE_SUCCESS };
}
function restoreFail(error) {
  window.console.log(error);
  return { type: RESTORE_FAIL };
}

function restore(dispatch, currentId, checked) {
  return restoreRequest(dispatch, currentId, checked)
  .then((response) => {
    dispatch(restoreSuccess(dispatch, checked, response))
  })
  .catch((err) => {
    dispatch(restoreFail(err))
  });
}

module.exports = restore;
