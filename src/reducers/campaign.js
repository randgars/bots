import {
    SET_CAMPAIGN_INFO_REQUEST,
    SET_CAMPAIGN_INFO_SUCCESS,
    SET_CAMPAIGN_INFO_FAIL,
    REMOVE_BOT_FROM_CAMPAIGN_REQUEST,
    REMOVE_BOT_FROM_CAMPAIGN_SUCCESS,
    REMOVE_BOT_FROM_CAMPAIGN_FAIL
} from '../actions/const';

const initialState = {
    campaignInfo: null
};

export default function campaignReducers(state = initialState, action) {
    switch (action.type) {
        case SET_CAMPAIGN_INFO_REQUEST:
            return {...state}
        case SET_CAMPAIGN_INFO_SUCCESS:
            return {...state, campaignInfo: action.campaign}
        case SET_CAMPAIGN_INFO_FAIL:
            return {...state}
        case REMOVE_BOT_FROM_CAMPAIGN_REQUEST:
            return {...state}
        case REMOVE_BOT_FROM_CAMPAIGN_SUCCESS:
            return {...state}
        case REMOVE_BOT_FROM_CAMPAIGN_FAIL:
            return {...state}
        default:
            return state
    }
}