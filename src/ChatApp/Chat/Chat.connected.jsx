import { connect } from 'react-redux';
import { Chat } from './Chat';
import { sendMessage } from '../ducks/sendMesage';

const mapStateToProps = (state) => ({
    userId: state.userId,
    messages: state.messages,
});

const mapDispatchToProps = {
    sendMessage,
};

export const ChatConnected = connect(mapStateToProps, mapDispatchToProps)(Chat);
