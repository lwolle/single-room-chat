import { setWsConnected } from './setWsConnected';
import { receiveMessage } from './receiveMessage';

export const configureSocket = () => (dispatch, getState, { ws }) => {
    const handler = {
        connect: () => dispatch(setWsConnected(true)),
        disconnect: () => dispatch(setWsConnected(false)),
        receive: (message) => dispatch(receiveMessage(message)),
    };
    ws.configure(handler);
};
