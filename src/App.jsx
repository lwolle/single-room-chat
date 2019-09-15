import React from 'react';
import './App.css';
import {Login} from './Login';
import {Chat} from './Chat';

// @todo memoize?
export const App = ({userId}) => {
    if (userId) {
        return <Login/>
    }

    return <Login/>
}