import { POST_ACTIVATE_TOKEN_REQUEST, POST_ACTIVATE_TOKEN_SUCCESS, POST_ACTIVATE_TOKEN_FAIL, ROUTING } from './const';
import axios from 'axios';

function postActivateTokenRequest(dispatch, data) {
  
  const url = '//192.168.1.237:8091/activate';
  const axiosRequest = axios.post(url, data);
  dispatch({ type: POST_ACTIVATE_TOKEN_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function postActivateTokenSuccess(dispatch, response) {
  
  window.console.log(response);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/login' }});
  return { type: POST_ACTIVATE_TOKEN_SUCCESS };
}
function postActivateTokenFail(dispatch, error) {
  
  window.console.log(error);
  let errorMessage = [];
  for (let i = 0; i < error.response.data.errors.length; i++) {
    errorMessage.push(error.response.data.errors[i].errorMessage);
  }
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/unverified' }});
  return { type: POST_ACTIVATE_TOKEN_FAIL, errorMessage };
}

function postActivateToken(dispatch, data) {
  return postActivateTokenRequest(dispatch, data)
  .then((response) => {
    dispatch(postActivateTokenSuccess(dispatch, response))
  })
  .catch((error) => {
    dispatch(postActivateTokenFail(dispatch, error))
  });
}

module.exports = postActivateToken;
