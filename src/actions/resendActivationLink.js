import { RESEND_REGISTRATION_LINK_REQUEST, RESEND_REGISTRATION_LINK_SUCCESS, RESEND_REGISTRATION_LINK_FAIL, ROUTING } from './const';
import axios from 'axios';

function resendActivationLinkRequest(dispatch, email, redirectUrl) {
  const url = '//192.168.1.237:8091/resend';
  const data = {
    "email": email,
    "url": redirectUrl
  };
  const axiosRequest = axios.post(url, data);
  dispatch({ type: RESEND_REGISTRATION_LINK_REQUEST, request: axiosRequest });

  return axiosRequest;
}
function resendActivationLinkSuccess(dispatch, response) {
  window.console.log(response);
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/activate' }});
  return { type: RESEND_REGISTRATION_LINK_SUCCESS };
}
function resendActivationLinkFail(error) {
  window.console.log(error);
  let errorMessage = [];
  for (let i = 0; i < error.response.data.errors.length; i++) {
    errorMessage.push(error.response.data.errors[i].errorMessage);
  }
  return { type: RESEND_REGISTRATION_LINK_FAIL, errorMessage };
}

function resendActivationLink(dispatch, email, redirectUrl) {
  return resendActivationLinkRequest(dispatch, email, redirectUrl)
  .then((response) => {
    dispatch(resendActivationLinkSuccess(dispatch, response))
  })
  .catch((err) => {
    dispatch(resendActivationLinkFail(err))
  });
}

module.exports = resendActivationLink;
