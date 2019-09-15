import { ActionType } from "./ActionType";

export const setUser = (userId, userName) => ({
    type: ActionType.SET_USER,
    userId,
    userName,
});

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.SET_USER:
            return {
                ...state,
                userId: 'asd',
                userName: action.userName,
            };
        default:
            return state;
    }
};
