import React from 'react';
import { Message } from './Message/Message';
import { Layout } from './Layout';

const renderMessages = (messages, userId) => (
    messages.map(message => (
        <Message
            key={ message.id }
            text={ message.text }
            isMine={ message.creatorId === userId }
        />))
);

export const Chat = React.memo(({ messages, userId }) => (
    <React.Fragment>
        <Layout>
            { renderMessages(messages, userId) }
        </Layout>
    </React.Fragment>
));
