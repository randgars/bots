import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAIL, ROUTING } from './const';
import axios from 'axios';

function registrationRequest(dispatch, email, password, confirmPassword, redirectUrl) {
  const url = '//192.168.1.237:8091/register';
  const data = {
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword,
    "url": redirectUrl
  };
  const axiosRequest = axios.post(url, data);
  dispatch({ type: REGISTRATION_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function registrationSuccess(dispatch, response) {
  window.console.log(response);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/activate' }});
  return { type: REGISTRATION_SUCCESS };
}
function registrationFail(error) {
  window.console.log(error);
  let errorMessage = [];
  for (let i = 0; i < error.response.data.errors.length; i++) {
    errorMessage.push(error.response.data.errors[i].errorMessage);
  }
  return { type: REGISTRATION_FAIL, errorMessage };
}

function registration(dispatch, email, password, confirmPassword, redirectUrl) {
  return registrationRequest(dispatch, email, password, confirmPassword, redirectUrl)
  .then((response) => {
    dispatch(registrationSuccess(dispatch, response))
  })
  .catch((err) => {
    dispatch(registrationFail(err))
  });
}

module.exports = registration;
