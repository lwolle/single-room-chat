import { connect } from 'react-redux';
import { Chat } from './Chat';
import { sendMessage } from '../ducks/sendMesage';

const getMessagesToShow = (state) => {
    if (state.searchResult.length) {
        return state.searchResult;
    }

    return state.messages;
};

const mapStateToProps = (state) => ({
    userId: state.userId,
    messages: getMessagesToShow(state),
    connected: state.connected,
});

const mapDispatchToProps = {
    sendMessage,
};

export const ChatConnected = connect(mapStateToProps, mapDispatchToProps)(Chat);
