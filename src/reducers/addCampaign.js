import { SAVE_CAMPAIGN_REQUEST, SAVE_CAMPAIGN_SUCCESS, SAVE_CAMPAIGN_FAIL } from '../actions/const';

const initialState = {
};

export default function addCampaignReducers(state = initialState, action) {
  switch (action.type) {
    case SAVE_CAMPAIGN_REQUEST:
      return {...state }
    case SAVE_CAMPAIGN_SUCCESS:
      return {...state }
    case SAVE_CAMPAIGN_FAIL:
      return {...state }
    default:
      return state
  }
}