import { ALL_MESSAGES } from '../actions/const';

const initialState = {
    allMessages: []
};

export default function botScriptReducers(state = initialState, action) {
    switch (action.type) {
        case ALL_MESSAGES:
            let all = state.allMessages.splice(0);
            all.push(action.newMessage);
            return {...state, allMessages: all}
        default:
            return state
    }
}