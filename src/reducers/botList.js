import {
    SET_BOTS_REQUEST,
    SET_BOTS_SUCCESS,
    SET_BOTS_FAIL,
    SEARCH_BOTS,
    ALL_BOTFILTER,
    APPROVEDFILTER,
    REJECTEDFILTER,
    DRAFTSFILTER,
    PENDING_ADMIN_APPROVALFILTER,
    PENDING_YOUR_APPROVALFILTER
} from '../actions/const';
const initialState = {
    list: null,
    filter: null
};

export default function botListReducers(state = initialState, action) {
    switch (action.type) {
        case SET_BOTS_REQUEST:
            return {...state}
        case SET_BOTS_SUCCESS:
            return {...state, list: action.botlist, filter: action.botlist}
        case SET_BOTS_FAIL:
            return {...state}
        case SEARCH_BOTS:
            return {...state, filter: state.list.filter(bot => bot.name.toLowerCase().includes(action.inputValue.toLowerCase()))}
        case ALL_BOTFILTER:
            return {...state, filter: state.list}
        case APPROVEDFILTER:
            return {...state, filter: state.list.filter(bot => bot.status == action.status)}
        case REJECTEDFILTER:
            return {...state, filter: state.list.filter(bot => bot.status == action.status)}
        case DRAFTSFILTER:
            return {...state, filter: state.list.filter(bot => bot.status == action.originalStatus)}
        case PENDING_ADMIN_APPROVALFILTER:
            return {...state, filter: state.list.filter(bot => bot.status == action.originalStatus)}
        case PENDING_YOUR_APPROVALFILTER:
            return {...state, filter: state.list.filter(bot => bot.status == action.originalStatus)}
        default:
            return state
    }
}