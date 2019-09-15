import {ActionType} from "./ActionType";

export const login = (userName) => ({
    type: ActionType.LOGIN,
    userName
});