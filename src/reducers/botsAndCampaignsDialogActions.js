import {
  SAVE_AS_DRAFT_REQUEST,
  SAVE_AS_DRAFT_SUCCESS,
  SAVE_AS_DRAFT_FAIL,
  RESTORE_REQUEST,
  RESTORE_SUCCESS,
  RESTORE_FAIL
} from '../actions/const';

const initialState = {
};

export default function botsAndCampaignsDialogActionsReducers(state = initialState, action) {
  switch (action.type) {
    case SAVE_AS_DRAFT_REQUEST:
      return {...state }
    case SAVE_AS_DRAFT_SUCCESS:
      return {...state}
    case SAVE_AS_DRAFT_FAIL:
      return {...state}
    case RESTORE_REQUEST:
      return {...state }
    case RESTORE_SUCCESS:
      return {...state}
    case RESTORE_FAIL:
      return {...state}
    default:
      return state
  }
}