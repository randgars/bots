import {
  GET_BOT_ADD_DATA_REQUEST,
  GET_BOT_ADD_DATA_SUCCESS,
  GET_BOT_ADD_DATA_FAIL
} from './const';
import axios from 'axios';

function getBotAddDataRequest(dispatch) {
  debugger
  const url = '//192.168.1.237:8091/bot/add';
  const config = {
    headers: {'X-Auth-Token': localStorage.getItem('X-Auth-Token')}
  };
  const axiosRequest = axios.get(url, config);
  dispatch({ type: GET_BOT_ADD_DATA_REQUEST, request: axiosRequest });
  return axiosRequest;
}
function getBotAddDataSuccess(dispatch, response) {
  window.console.log(response);
  debugger
  const data = response.data;
  return { type: GET_BOT_ADD_DATA_SUCCESS, data };
}
function getBotAddDataFail(error) {
  debugger
  window.console.log(error);
  return { type: GET_BOT_ADD_DATA_FAIL };
}

function getBotAddData(dispatch) {
  return getBotAddDataRequest(dispatch)
  .then((response) => {
    dispatch(getBotAddDataSuccess(dispatch, response))
  })
  .catch((err) => {
    dispatch(getBotAddDataFail(err))
  });
}

module.exports = getBotAddData;
