import React from 'react';
import { Chat } from '../Chat/Chat';
import { LoginConnected } from '../Login/Login.connected';

// @todo memoize?
export const App = ({ userId }) => {
    if (userId) {
        return <Chat />;
    }

    return <LoginConnected />;
};
