import {
    PUBLISH_BOT_REQUEST,
    PUBLISH_BOT_SUCCESS,
    PUBLISH_BOT_FAIL
} from './const';
import axios from 'axios';

function publishBotRequest(dispatch, botId) {
  const url = `//192.168.1.237:8091/bot/${botId}/publish`;
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const data = {};
  const axiosRequest = axios.post(url, data, config);
  dispatch({ type: PUBLISH_BOT_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function publishBotSuccess(response) {
    debugger
  window.console.log(response);
  //response.data.token
  return { type: PUBLISH_BOT_SUCCESS };
}
function publishBotFail(error) {
  window.console.log(error);
  return { type: PUBLISH_BOT_FAIL };
}

function publishBot(dispatch, botId) {
  return publishBotRequest(dispatch, botId)
  .then((response) => {
    dispatch(publishBotSuccess(response))
  })
  .catch((err) => {
    dispatch(publishBotFail(err))
  });
}

module.exports = publishBot;
