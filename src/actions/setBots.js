import {
  SET_BOTS_REQUEST,
  SET_BOTS_SUCCESS,
  SET_BOTS_FAIL
} from './const';
import axios from 'axios';

function setBotsRequest(dispatch) {
  const url = '//192.168.1.237:8091/bot/all';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const axiosRequest = axios.get(url, config);
  dispatch({ type: SET_BOTS_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function setBotsSuccess(response) {
  window.console.log(response);
  const botlist = response.data.items;
  return { type: SET_BOTS_SUCCESS, botlist };
}
function setBotsFail(error) {
  window.console.log(error);
  return { type: SET_BOTS_FAIL };
}

function setBots(dispatch) {
  return setBotsRequest(dispatch)
  .then((response) => {
    dispatch(setBotsSuccess(response))
  })
  .catch((err) => {
    dispatch(setBotsFail(err))
  });
}

module.exports = setBots;
