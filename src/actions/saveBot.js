import { SAVE_BOT_REQUEST, SAVE_BOT_SUCCESS, SAVE_BOT_FAIL, ROUTING } from './const';
import axios from 'axios';

function saveBotRequest(dispatch, data) {
  const url = '//192.168.1.237:8091/bot/add';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const axiosRequest = axios.post(url, data, config);
  dispatch({ type: SAVE_BOT_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function saveBotSuccess(dispatch, response) {
  window.console.log(response);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/main' }});
  return { type: SAVE_BOT_SUCCESS };
}
function saveBotFail(error) {
  window.console.log(error);
  return { type: SAVE_BOT_FAIL };
}

function saveBot(dispatch, data) {
  return saveBotRequest(dispatch, data)
  .then((response) => {
    dispatch(saveBotSuccess(dispatch, response))
  })
  .catch((err) => {
    dispatch(saveBotFail(err))
  });
}

module.exports = saveBot;
