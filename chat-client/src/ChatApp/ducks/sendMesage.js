import { setMessages } from './setMessages';

export const sendMessage = (messageText) => async (dispatch, getState, { api }) => {
    // const response = await api.login(userName);
    // if (response.ok) {
    //     const { userId } = response.body;

    // const messageResponse = await api.getMessages();
    // const { messages } = messageResponse.body;

    const message = {
        id: 123,
        creatorId: getState().userId,
        text: messageText,
    };
    const messages = [...getState().messages, message];
    dispatch(setMessages(messages));
    // }
};
