import {
    SET_CAMPAIGNS_REQUEST,
    SET_CAMPAIGNS_SUCCESS,
    SET_CAMPAIGNS_FAIL,
    SEARCH_CAMPAIGNS,
    ALL_CAMPAIGN_FILTER,
    APPROVED_CAMPAIGN_FILTER,
    REJECTED_CAMPAIGN_FILTER,
    DRAFTS_CAMPAIGN_FILTER,
    PENDING_ADMIN_APPROVAL_CAMPAIGN_FILTER,
    PENDING_YOUR_APPROVAL_CAMPAIGN_FILTER
} from '../actions/const';

const initialState = {
    list: null,
    filter: null
};

export default function campaignListReducers(state = initialState, action) {
    switch (action.type) {
        case SET_CAMPAIGNS_REQUEST:
            return {...state}
        case SET_CAMPAIGNS_SUCCESS:
            return {...state, list: action.campaignlist, filter: action.campaignlist}
        case SET_CAMPAIGNS_FAIL:
            return {...state}
        case SEARCH_CAMPAIGNS:
            return {...state, filter: state.list.filter(campaign => campaign.name.toLowerCase().includes(action.inputValue.toLowerCase()))}
        case ALL_CAMPAIGN_FILTER:
            return {...state, filter: state.list}
        case APPROVED_CAMPAIGN_FILTER:
            return {...state, filter: state.list.filter(campaign => campaign.status == action.status)}
        case REJECTED_CAMPAIGN_FILTER:
            return {...state, filter: state.list.filter(campaign => campaign.status == action.status)}
        case DRAFTS_CAMPAIGN_FILTER:
            return {...state, filter: state.list.filter(campaign => campaign.status == action.originalStatus)}
        case PENDING_ADMIN_APPROVAL_CAMPAIGN_FILTER:
            return {...state, filter: state.list.filter(campaign => campaign.status == action.originalStatus)}
        case PENDING_YOUR_APPROVAL_CAMPAIGN_FILTER:
            return {...state, filter: state.list.filter(campaign => campaign.status == action.originalStatus)}
        default:
            return state
    }
}