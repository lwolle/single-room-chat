import React from 'react';
import { ChatConnected } from '../Chat/Chat.connected';
import { LoginConnected } from '../Login/Login.connected';

// @todo memoize?
export const App = ({ userId }) => {
    if (userId) {
        return <ChatConnected />;
    }

    return <LoginConnected />;
};
