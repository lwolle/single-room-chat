import { setUser } from './setUser';
import { setMessages } from './setMessages';
import { ResponseStatusHandler } from './ResponseStatusHandler';

export const login = (loginName) => async (dispatch, getState, { api }) => {
    const response = await api.login(loginName);

    if (!ResponseStatusHandler.isOk(response.status)) {
        return;
    }

    const { userId, userName } = response.data;

    const messageResponse = await api.getMessages();

    if (!ResponseStatusHandler.isOk(messageResponse.status)) {
        return;
    }

    const { messages } = messageResponse.data;

    dispatch(setUser(userId, userName));
    dispatch(setMessages(messages));
};

