import { setMessages } from './setMessages';
import { ResponseStatusHandler } from './ResponseStatusHandler';

export const sendMessage = (messageText) => async (dispatch, getState, { api }) => {
    const userId = getState().userId;

    const messageDraft = {
        text: messageText,
        creatorId: userId,
    };

    const response = await api.sendMessage(messageDraft);

    if (ResponseStatusHandler.isOk(response.status)) {
        const { message } = response.data;
        const messages = [...getState().messages, message];
        dispatch(setMessages(messages));
    }
};
