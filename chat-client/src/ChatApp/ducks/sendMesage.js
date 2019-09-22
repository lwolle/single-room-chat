import { ResponseStatusHandler } from './ResponseStatusHandler';

export const sendMessage = (messageText) => async (dispatch, getState, { api }) => {
    const { userId, userName } = getState();

    const messageDraft = {
        text: messageText,
        creatorId: userId,
        creatorName: userName,
    };

    const response = await api.sendMessage(messageDraft);

    if (ResponseStatusHandler.isOk(response.status)) {
        return true;
    }

    return false;
};
