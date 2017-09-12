import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL,
  POST_ACTIVATE_TOKEN_REQUEST,
  POST_ACTIVATE_TOKEN_SUCCESS,
  POST_ACTIVATE_TOKEN_FAIL,
  RESEND_REGISTRATION_LINK_REQUEST,
  RESEND_REGISTRATION_LINK_SUCCESS,
  RESEND_REGISTRATION_LINK_FAIL
} from '../actions/const';

const initialState = {
  errorMessage: null
};

export default function userRegistrationReducers(state = initialState, action) {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {...state }
    case REGISTRATION_SUCCESS:
      return {...state}
    case REGISTRATION_FAIL:
      return {...state, errorMessage: action.errorMessage}
    case POST_ACTIVATE_TOKEN_REQUEST:
      return {...state }
    case POST_ACTIVATE_TOKEN_SUCCESS:
      return {...state}
    case POST_ACTIVATE_TOKEN_FAIL:
      return {...state, errorMessage: action.errorMessage}
    case RESEND_REGISTRATION_LINK_REQUEST:
      return {...state }
    case RESEND_REGISTRATION_LINK_SUCCESS:
      return {...state}
    case RESEND_REGISTRATION_LINK_FAIL:
      return {...state, errorMessage: action.errorMessage}
    default:
      return state
  }
}