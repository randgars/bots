import { LOGOUT, ROUTING } from './const';

function logout(dispatch) {
  window.localStorage.clear();
  dispatch({ type: ROUTING, payload: {method: 'replace', nextUrl: '/' }});
  return { type: LOGOUT };
}

module.exports = logout;
