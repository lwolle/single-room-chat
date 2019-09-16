import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { Chat } from '../Chat/Chat';
import { LoginConnected } from '../Login/Login.connected';

describe('App', () => {
    it('should render Login', () => {
        const root = shallow(<App />);
        expect(root.find(LoginConnected)).toExist()
    });

    it('should render Chat', () => {
        const root = shallow(<App userId="user-id" />);
        expect(root.find(Chat)).toExist()
    });
});
