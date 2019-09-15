import { ActionType } from "./ActionType";

export const setUser = (userId, userName) => ({
    type: ActionType.LOGIN,
    userId,
    userName,
});

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return {
                ...state,
                userId: 'asd',
                userName: action.userName,
            };
        default:
            return state;
    }
};
