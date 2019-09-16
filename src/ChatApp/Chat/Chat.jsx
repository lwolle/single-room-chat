import React from 'react';
import { Message } from './Message/Message';

const renderMessages = (messages) => (
    messages.map(message => (
        <Message
            key={ message.id }
            text={ message.text }
            isMyMessage={ message.creatorId === 'me' }
        />))
);

export const Chat = React.memo((messages) => (
    <React.Fragment>
        { renderMessages(messages) }
    </React.Fragment>
));
