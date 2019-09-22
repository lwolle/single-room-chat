import { setMessages } from './setMessages';

export const receiveMessage = (receivedMessage) => (
    dispatch, getState,
) => {
    const message = {
        id: receivedMessage.id,
        text: receivedMessage.text,
        creatorId: receivedMessage.creatorId,
        creatorName: receivedMessage.creatorName,
    };

    const messages = [...getState().messages, message];
    dispatch(setMessages(messages));
};
