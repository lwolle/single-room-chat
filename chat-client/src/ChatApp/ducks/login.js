import { setUser } from './setUser';
import { setMessages } from './setMessages';

export const login = (userName) => async (dispatch, getState, { api }) => {
    const response = await api.login(userName);
    if (response.ok) {
        const { userId } = response.body;

        const messageResponse = await api.getMessages();
        const { messages } = messageResponse.body;

        dispatch(setUser(userId, userName));
        dispatch(setMessages(messages));
    }
};
