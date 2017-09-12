import {
  SET_BOT_INFO,
  PUBLISH_BOT_REQUEST,
  PUBLISH_BOT_SUCCESS,
  PUBLISH_BOT_FAIL,
} from '../actions/const';

const initialState = {
  botInfo: null
};

export default function botReducers(state = initialState, action) {
  switch (action.type) {
    case SET_BOT_INFO:
      return {...state, botInfo: action.item}
    case PUBLISH_BOT_REQUEST:
      return {...state}
    case PUBLISH_BOT_SUCCESS:
      return {...state}
    case PUBLISH_BOT_FAIL:
      return {...state}
    default:
      return state
  }
}