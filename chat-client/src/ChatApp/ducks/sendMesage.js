import { ResponseStatusHandler } from './ResponseStatusHandler';

export const sendMessage = (messageText) => async (dispatch, getState, { api }) => {
    const { userId } = getState();

    const messageDraft = {
        text: messageText,
        creatorId: userId,
    };

    const response = await api.sendMessage(messageDraft);

    if (ResponseStatusHandler.isOk(response.status)) {
        return true;
    }

    return false;
};
