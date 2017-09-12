import {
  SAVE_BOT_REQUEST,
  SAVE_BOT_SUCCESS,
  SAVE_BOT_FAIL,
  GET_BOT_ADD_DATA_REQUEST,
  GET_BOT_ADD_DATA_SUCCESS,
  GET_BOT_ADD_DATA_FAIL
} from '../actions/const';

const initialState = {
  botAddData: null
};

export default function addBotReducers(state = initialState, action) {
  switch (action.type) {
    case SAVE_BOT_REQUEST:
      return {...state }
    case SAVE_BOT_SUCCESS:
      return {...state }
    case SAVE_BOT_FAIL:
      return {...state }
    case GET_BOT_ADD_DATA_REQUEST:
      return {...state}
    case GET_BOT_ADD_DATA_SUCCESS:
      return {...state, botAddData: action.data }
    case GET_BOT_ADD_DATA_FAIL:
      return {...state}
    default:
      return state
  }
}