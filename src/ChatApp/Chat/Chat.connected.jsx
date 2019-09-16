import { connect } from 'react-redux';
import { Chat } from './Chat';

const mapStateToProps = (state) => ({
    userId: state.userId,
    messages: state.messages,
});

export const ChatConnected = connect(mapStateToProps)(Chat);
