import { ActionType } from './ActionType';

export const setMessages = (messages) => ({
    type: ActionType.SET_MESSAGES,
    messages,
});

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            };
        default:
            return state;
    }
};
