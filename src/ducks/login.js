import { ActionType } from "./ActionType";

export const login = (userName) => ({
    type: ActionType.LOGIN,
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
