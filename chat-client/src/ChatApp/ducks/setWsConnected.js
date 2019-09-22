import { ActionType } from './ActionType';

export const setWsConnected = (connected) => ({
    type: ActionType.SET_WS_CONNECTED,
    connected,
});

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.SET_WS_CONNECTED:
            return {
                ...state,
                connected: action.connected,
            };
        default:
            return state;
    }
};
