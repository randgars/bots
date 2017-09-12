import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, ROUTING } from './const';
import axios from 'axios';

function loginRequest(dispatch, username, password) {
  const url = '//192.168.1.237:8091/login';
  const data = {
    "username": username, 
    "password": password
  };
  const axiosRequest = axios.post(url, data);
  dispatch({ type: LOGIN_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function loginSuccess(dispatch, response) {
  window.console.log(response);
  const token = response.data.token;
  
  window.localStorage.setItem('X-Auth-Token', token);
  window.localStorage.setItem('logged', true);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/main' }});
  return { type: LOGIN_SUCCESS };
}
function loginFail(dispatch, error) {
  window.console.log(error);
  
  let err = error.response.data.error;
  let errorMessage = null;
  if (err.code == null) {
    errorMessage = error.response.statusText;
  }
  switch (err.code) {
    case 4013:
      errorMessage = err.message;
      dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/unverified' }});
      break;
    default:
      errorMessage = err.message;
      break;
  }
  return { type: LOGIN_FAIL, errorMessage };
}

function login(dispatch, username, password) {
  return loginRequest(dispatch, username, password)
  .then((response) => {
    dispatch(loginSuccess(dispatch, response))
  })
  .catch((error) => {
    dispatch(loginFail(dispatch, error))
  });
}

module.exports = login;
