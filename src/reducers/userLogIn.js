import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/const';

const initialState = {
  token: window.localStorage.getItem('X-Auth-Token'),
  logged: window.localStorage.getItem('logged'),
  errorMessage: null
};

export default function userLogInReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state }
    case LOGIN_SUCCESS:
      return {...state}
    case LOGIN_FAIL:
      return {...state, errorMessage: action.errorMessage}
    case LOGOUT:
      return {...state}
    default:
      return state
  }
}